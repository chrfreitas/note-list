import React from 'react';

import { NoteList as NoteListView } from '../../views/note-list/note-list';
import { useNotes } from './note-list.hooks';

// eslint-disable-next-line max-lines-per-function
const NoteList = () => {
  const {
    notes,
    order,
    numberOfSelected,
    add,
    select,
    clear,
    toggleOrder
  } = useNotes();

  return (
    <NoteListView
      notes={notes}
      order={order}
      numberOfSelected={numberOfSelected}
      add={add}
      select={select}
      clear={clear}
      toggleOrder={toggleOrder}
    />
  );
};

export default NoteList;
