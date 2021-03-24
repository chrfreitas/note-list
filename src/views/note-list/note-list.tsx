import React from 'react';

import Header from '../../components/header/header';

import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';
import { INoteListProps } from './note-list.interfaces';

export const NoteList = ({
  notes,
  order,
  selectedNotes,
  add,
  select,
  clearAllSelects,
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
        <NoteItem
          key={note.id}
          select={select}
          clearAllSelects={clearAllSelects}
          {...note}
        />
      ))}
    </Container>
  ) : (
    <Container>Loading ...</Container>
  );
