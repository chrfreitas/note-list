import React, { useEffect, useState } from 'react';

import DataSource from '../../services/datasource/datasource';
import { INoteDataSource } from '../../services/datasource/datasource.interface';
import { orderByDate, OrderType } from '../../services/utils/utils';
import { NoteList as NoteListView } from '../../views/note-list/note-list';

// eslint-disable-next-line max-lines-per-function
const NoteList = () => {
  const [order, setOrder] = useState<OrderType>(OrderType.ascending);
  const [notes, setNotes] = useState<INoteDataSource[]>([]);

  const data = DataSource.getNotes();

  const toggleOrder = () => {
    if (order === OrderType.ascending) {
      return setOrder(OrderType.descending);
    }

    return setOrder(OrderType.ascending);
  };

  useEffect(() => {
    const orderedNotes = orderByDate<INoteDataSource>(data, order);
    setNotes(orderedNotes);
  }, [order]);

  return <NoteListView notes={notes} order={order} toggleOrder={toggleOrder} />;
};

export default NoteList;
