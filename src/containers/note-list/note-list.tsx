import React, { useEffect, useMemo, useState } from 'react';

import DataSource, {
  generateFakeNote
} from '../../services/datasource/datasource';
import { NotesOrder, INote } from '../../interfaces/note';
import { orderByDate } from '../../services/utils/utils';
import { NoteList as NoteListView } from '../../views/note-list/note-list';

// eslint-disable-next-line max-lines-per-function
const NoteList = () => {
  const [order, setOrder] = useState<NotesOrder>(NotesOrder.ascending);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const orderedNotes = orderByDate<INote>(notes, order);
    setNotes(orderedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    const data = DataSource.getNotes();
    const orderedNotes = orderByDate<INote>(data, order);
    setNotes(orderedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedNotes = useMemo(() => {
    const filter: INote[] = notes.filter((note) => note.selected);
    return filter.length;
  }, [notes]);

  const toggleOrder = (): void => {
    if (order === NotesOrder.ascending) {
      return setOrder(NotesOrder.descending);
    }

    return setOrder(NotesOrder.ascending);
  };

  const add = (): void => {
    const today = new Date();
    const note = generateFakeNote(today);
    setNotes((prev) => [note, ...prev]);
  };

  const select = (id: string): void => {
    const filteredNotes = notes.reduce((total: INote[], current: INote) => {
      if (current.id === id) {
        // eslint-disable-next-line no-param-reassign
        current.selected = !current.selected;
      }

      return [...total, current];
    }, []);

    setNotes(filteredNotes);
  };

  const clearAllSelects = (): void => {
    const unselectedNotes = notes.map((note) => ({ ...note, selected: false }));
    setNotes(unselectedNotes);
  };

  return (
    <NoteListView
      notes={notes}
      order={order}
      selectedNotes={selectedNotes}
      add={add}
      select={select}
      clearAllSelects={clearAllSelects}
      toggleOrder={toggleOrder}
    />
  );
};

export default NoteList;
