import React, { useEffect, useMemo, useState } from 'react';

import DataSource, {
  generateFakeNote
} from '../../services/datasource/datasource';
import { orderByDate, OrderType } from '../../services/utils/utils';
import { NoteList as NoteListView } from '../../views/note-list/note-list';
import { INoteList } from './note-list.interfaces';

// eslint-disable-next-line max-lines-per-function
const NoteList = () => {
  const [order, setOrder] = useState<OrderType>(OrderType.ascending);
  const [notes, setNotes] = useState<INoteList[]>([]);

  useEffect(() => {
    const orderedNotes = orderByDate<INoteList>(notes, order);
    setNotes(orderedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  useEffect(() => {
    const data = DataSource.getNotes();
    const orderedNotes = orderByDate<INoteList>(data, order);
    setNotes(orderedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedNotes = useMemo(() => {
    const filter: INoteList[] = notes.filter((note) => note.selected);
    return filter.length;
  }, [notes]);

  const toggleOrder = (): void => {
    if (order === OrderType.ascending) {
      return setOrder(OrderType.descending);
    }

    return setOrder(OrderType.ascending);
  };

  const add = (): void => {
    const note = generateFakeNote();
    setNotes((prev) => [note, ...prev]);
  };

  const select = (id: string): void => {
    const filteredNotes = notes.reduce(
      (total: INoteList[], current: INoteList) => {
        if (current.id === id) {
          // eslint-disable-next-line no-param-reassign
          current.selected = !current.selected;
        }

        return [...total, current];
      },
      []
    );

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
