import React from 'react';
import Icon from '../../../../components/icon/icon';
import { colors } from '../../../../styles/colors';

import { Container, Title, Subtitle, Date, Infos } from './note-item.styles';
import NoteTags from '../note-tags/note-tags';

interface INoteItem {
  title: string;
  subtitle: String;
  date: Date;
  tags: string[];
}

const NoteItem = ({ title, subtitle, date, tags }: INoteItem) => (
  <Container>
    <Icon type="text-rich" width={12} height={10} color={colors.blue} />
    <Infos>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Date>{date.getDate()}</Date>
      {tags.length && <NoteTags tags={tags} />}
    </Infos>
  </Container>
);

export default NoteItem;
