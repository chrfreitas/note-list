import React from 'react';

import Header from '../../components/header/header';
import { INoteDataSource } from '../../services/datasource/datasource.interface';
import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';

interface INoteListProps {
  notes: INoteDataSource[];
}

export const NoteList = ({ notes }: INoteListProps) => (
  <Container>
    <Header />
    {notes.map((note) => (
      <NoteItem key={note.title} {...note} />
    ))}
  </Container>
);
