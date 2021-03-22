import React from 'react';
import Icon from '../../../../components/icon/icon';
import { colors } from '../../../../styles/colors';

import NoteTags from '../note-tags/note-tags';
import NoteDate from '../note-date/note-date';
import { Container, Title, Subtitle, Infos } from './note-item.styles';

export interface INoteItemProps {
  title: string;
  subtitle: String;
  date: Date;
  tags: string[];
}

const NoteItem = ({ title, subtitle, date, tags }: INoteItemProps) => (
  <Container>
    <Icon type="text-rich" width={12} height={10} color={colors.blue} />
    <Infos>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <NoteDate date={date} />
      {tags.length && <NoteTags tags={tags} />}
    </Infos>
  </Container>
);

export default NoteItem;
