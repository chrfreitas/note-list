import React from 'react';

import Header from '../../components/header/header';

import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';
import { INoteListProps } from './note-list.interfaces';

export const NoteList = ({
  notes,
  order,
  numberOfSelected,
  add,
  select,
  clear,
  toggleOrder
}: INoteListProps) =>
  notes.length ? (
    <Container>
      <Header
        order={order}
        numberOfSelected={numberOfSelected}
        add={add}
        toggleOrder={toggleOrder}
      />
      {notes.map((note) => (
        <NoteItem key={note.id} select={select} clear={clear} {...note} />
      ))}
    </Container>
  ) : (
    <Container>Loading ...</Container>
  );
