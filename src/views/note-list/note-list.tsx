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
  onAdd,
  onSelect,
  onClear,
  onToggleOrder
}: INoteListProps) => (
  <Container>
    <Header
      order={order}
      numberOfSelected={numberOfSelected}
      onAdd={onAdd}
      onToggleOrder={onToggleOrder}
      onClear={onClear}
    />
    {notes.length > 0 ? (
      notes.map((note) => (
        <NoteItem
          key={note.id}
          onSelect={onSelect}
          onClear={onClear}
          {...note}
        />
      ))
    ) : (
      <ListSkeletonLoader quantity={6} />
    )}
  </Container>
);
