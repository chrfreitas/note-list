import React from 'react';

import Header from '../../components/header/header';
import ListSkeletonLoader from '../../components/list-skeleton-loader/list-skeleton-loader';
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
}: INoteListProps) => (
  <Container>
    <Header
      order={order}
      numberOfSelected={numberOfSelected}
      add={add}
      toggleOrder={toggleOrder}
    />
    {notes.length ? (
      notes.map((note) => (
        <NoteItem key={note.id} select={select} clear={clear} {...note} />
      ))
    ) : (
      <ListSkeletonLoader quantity={6} />
    )}
  </Container>
);
