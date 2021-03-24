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
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

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

  const select = (id: string): void => {
    const selectedNote = selectedNotes.find((noteId) => noteId === id);

    if (selectedNote) {
      const selectedNotesFiltered = selectedNotes.filter(
        (noteId) => noteId !== id
      );
      return setSelectedNotes(selectedNotesFiltered);
    }

    return setSelectedNotes((prev) => [id, ...prev]);
  };

  useEffect(() => {
    const orderedNotes = orderByDate<INoteDataSource>(data, order);
    setNotes(orderedNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  return (
    <NoteListView
      notes={notes}
      order={order}
      selectedNotes={selectedNotes}
      add={add}
      select={select}
      toggleOrder={toggleOrder}
    />
  );
};

export default NoteList;
