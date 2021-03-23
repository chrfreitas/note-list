import React from 'react';

import Header from '../../components/header/header';
import NoteItem, { INoteItemProps } from './components/note-item/note-item';
import { Container } from './note-list.styles';

interface INoteListProps {
  notes: INoteItemProps[];
}

export const NoteList = ({ notes }: INoteListProps) => (
  <Container>
    <Header />
    {notes.map((note) => (
      <NoteItem key={note.title} {...note} />
    ))}
  </Container>
);
