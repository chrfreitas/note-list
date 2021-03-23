import React from 'react';
import { NoteList as NoteListView } from '../../views/note-list/note-list';

const NoteList = () => {
  const node1 = [
    {
      title: 'Random notes 1',
      subtitle: 'I need to order some shampoo',
      date: new Date(),
      tags: ['food', 'personal', 'tech', 'studies'],
    },
    {
      title: 'Random notes 2',
      subtitle: 'I need to order some shampoo',
      date: new Date(),
      tags: ['food', 'personal', 'tech', 'studies'],
    },
    {
      title: 'Random notes 3',
      subtitle: 'I need to order some shampoo',
      date: new Date(),
      tags: ['food', 'personal', 'tech', 'studies'],
    },
  ];

  return <NoteListView notes={node1} />;
};

export default NoteList;
