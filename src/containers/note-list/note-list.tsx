import React from 'react';

import { NoteList as NoteListView } from '../../views/note-list/note-list';
import { useNotes } from './note-list.hooks';

const NoteList = () => {
  const {
    notes,
    order,
    numberOfSelected,
    onAdd,
    onSelect,
    onClear,
    onToggleOrder
  } = useNotes();

  return (
    <NoteListView
      notes={notes}
      order={order}
      numberOfSelected={numberOfSelected}
      onAdd={onAdd}
      onSelect={onSelect}
      onClear={onClear}
      onToggleOrder={onToggleOrder}
    />
  );
};

export default NoteList;
