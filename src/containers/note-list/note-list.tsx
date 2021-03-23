import React, { useEffect, useState } from 'react';

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

  const data = DataSource.getNotes();

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

  useEffect(() => {
    const orderedNotes = orderByDate<INoteDataSource>(data, order);
    setNotes(orderedNotes);
  }, [order]);

  return (
    <NoteListView
      add={add}
      notes={notes}
      order={order}
      toggleOrder={toggleOrder}
    />
  );
};

export default NoteList;
