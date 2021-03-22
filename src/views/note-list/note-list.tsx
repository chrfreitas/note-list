import React from 'react';

import Header from '../../components/header/header';
import NoteItem from './components/note-item/note-item';
import { Container } from './note-list.styles';

const NoteList = () => (
  <Container>
    <Header />
    <NoteItem />
  </Container>
);

export default NoteList;
