import React from 'react';
import DataSource from '../../services/datasource/datasource';
import { NoteList as NoteListView } from '../../views/note-list/note-list';

const NoteList = () => {
  const notes = DataSource.getNotes();
  return <NoteListView notes={notes} />;
};

export default NoteList;
