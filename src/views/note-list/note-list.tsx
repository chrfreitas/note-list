import React from 'react';

import Header from '../../components/header/header';
import { INoteDataSource } from '../../services/datasource/datasource.interface';
import { OrderType } from '../../services/utils/utils';
import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';

interface INoteListProps {
  notes: INoteDataSource[];
  order: OrderType;
  selectedNotes: string[];
  add: () => void;
  select: (id: string) => void;
  toggleOrder: () => void;
}

export const NoteList = ({
  notes,
  order,
  selectedNotes,
  add,
  select,
  toggleOrder
}: INoteListProps) =>
  notes.length ? (
    <Container>
      <Header
        order={order}
        selectedNotes={selectedNotes}
        add={add}
        toggleOrder={toggleOrder}
      />
      {notes.map((note) => (
        <NoteItem key={note.id} select={select} {...note} />
      ))}
    </Container>
  ) : (
    <Container>Loading ...</Container>
  );
