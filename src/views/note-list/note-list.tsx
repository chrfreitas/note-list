import React from 'react';

import Header from '../../components/header/header';
import { INoteDataSource } from '../../services/datasource/datasource.interface';
import { OrderType } from '../../services/utils/utils';
import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';

interface INoteListProps {
  notes: INoteDataSource[];
  order: OrderType;
  add: () => void;
  toggleOrder: () => void;
}

export const NoteList = ({ notes, order, add, toggleOrder }: INoteListProps) =>
  notes.length ? (
    <Container>
      <Header add={add} order={order} toggleOrder={toggleOrder} />
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </Container>
  ) : (
    <Container>Loading ...</Container>
  );
