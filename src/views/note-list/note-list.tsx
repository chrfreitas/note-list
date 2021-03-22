import React from 'react';

import Header from '../../components/header/header';
import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';

const node1 = {
  title: 'Random notes',
  subtitle: 'I need to order some shampoo',
  date: new Date(),
  tags: ['food', 'personal', 'tech', 'studies'],
};

const node2 = {
  title: 'Random notes',
  subtitle: 'I need to order some shampoo',
  date: new Date(),
  tags: ['food', 'personal', 'tech', 'studies'],
};

const NoteList = () => (
  <Container>
    <Header />
    <NoteItem {...node1} />
    <NoteItem {...node2} />
  </Container>
);

export default NoteList;
