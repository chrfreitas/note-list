import React, { useEffect, useMemo, useState } from 'react';

import DataSource, {
  generateFakeNote
} from '../../services/datasource/datasource';
import { INoteDataSource } from '../../services/datasource/datasource.interface';
import { orderByDate, OrderType } from '../../services/utils/utils';
import { NoteList as NoteListView } from '../../views/note-list/note-list';

// eslint-disable-next-line max-lines-per-function
const NoteList = () => {
  const [order, setOrder] = useState<OrderType>(OrderType.ascending);
  const [notes, setNotes] = useState<INoteDataSource[]>([]);

  const selectedNotes = useMemo(() => {
    const filter: INoteDataSource[] = notes.filter((note) => note.selected);
    return filter.length;
  }, [notes]);

  useEffect(() => {
    const orderedNotes = orderByDate<INoteDataSource>(notes, order);
    setNotes(orderedNotes);
  }, [notes, order]);

  useEffect(() => {
    const data = DataSource.getNotes();
    setNotes(data);
  }, []);

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
      (total: INoteDataSource[], current: INoteDataSource) => {
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
