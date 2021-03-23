import React from 'react';

import { INoteDataSource } from '../../../../services/datasource/datasource.interface';
import NoteTags from '../note-tags/note-tags';
import NoteDate from '../note-date/note-date';
import NoteIcon from '../note-icon/note-icon';
import { Container, Title, Subtitle, Infos } from './note-item.styles';

const NoteItem = ({ type, title, subtitle, date, tags }: INoteDataSource) => (
  <Container>
    <NoteIcon type={type} />
    <Infos>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <NoteDate date={date} />
      {tags.length && <NoteTags tags={tags} />}
    </Infos>
  </Container>
);

export default NoteItem;
