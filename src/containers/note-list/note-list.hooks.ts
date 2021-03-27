import { useEffect, useMemo, useState } from 'react';

import { INote, NotesOrder } from '../../interfaces/note';
import DataSource, {
  generateFakeNote
} from '../../services/datasource/datasource';
import { orderByDate } from '../../services/utils/utils';

interface IUseNote {
  notes: INote[];
  order: NotesOrder;
  numberOfSelected: number;
  onToggleOrder: () => void;
  onAdd: () => void;
  onSelect: (id: string) => void;
  onClear: () => void;
}

// eslint-disable-next-line max-lines-per-function
export const useNotes = (): IUseNote => {
  const [order, setOrder] = useState<NotesOrder>(NotesOrder.ascending);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const orderedNotes = orderByDate<INote>(notes, order);
    setNotes(orderedNotes);
  }, [order]);

  useEffect(() => {
    const data = DataSource.getNotes();
    const orderedNotes = orderByDate<INote>(data, order);
    setNotes(orderedNotes);
  }, []);

  const numberOfSelected = useMemo<number>(() => {
    const filter = notes.filter((note) => note.selected);
    return filter.length;
  }, [notes]);

  const onAdd = (): void => {
    const today = new Date();
    const note = generateFakeNote(today);
    setNotes((prev) => [note, ...prev]);
  };

  const onSelect = (id: string): void => {
    const filteredNotes = notes.reduce((total: INote[], current: INote) => {
      if (current.id === id) {
        // eslint-disable-next-line no-param-reassign
        current.selected = !current.selected;
      }

      return [...total, current];
    }, []);

    setNotes(filteredNotes);
  };

  const onClear = (): void => {
    const unselectedNotes = notes.map((note) => ({ ...note, selected: false }));
    setNotes(unselectedNotes);
  };

  const onToggleOrder = (): void => {
    if (order === NotesOrder.ascending) {
      return setOrder(NotesOrder.descending);
    }

    return setOrder(NotesOrder.ascending);
  };

  return {
    notes,
    order,
    numberOfSelected,
    onAdd,
    onSelect,
    onClear,
    onToggleOrder
  };
};
