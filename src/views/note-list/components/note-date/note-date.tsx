import React from 'react';

import { Container } from './note-tag.styles';

interface INoteDateProps {
  date: Date;
}

const NoteDate = ({ date }: INoteDateProps) => (
  <Container>{date.getDate()}</Container>
);

export default NoteDate;
