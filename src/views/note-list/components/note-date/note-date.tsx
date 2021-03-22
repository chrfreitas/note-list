import React from 'react';
import DateService from '../../../../services/date/date.service';

import { Container } from './note-date.styles';

interface INoteDateProps {
  date: Date;
}

const NoteDate = ({ date }: INoteDateProps) => (
  <Container>{DateService.convertToTimeline(date)}</Container>
);

export default NoteDate;
