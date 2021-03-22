import React from 'react';
import Icon from '../../../../components/icon/icon';
import { colors } from '../../../../styles/colors';

import {
  Container,
  Title,
  Subtitle,
  Date,
  Tags,
  Infos,
} from './note-item.styles';

const NoteItem = () => (
  <Container>
    <Icon type="text-rich" width={12} height={10} color={colors.blue} />
    <Infos>
      <Title>Random notes</Title>
      <Subtitle>I need to order some shampoo</Subtitle>
      <Date>Today, 10:23</Date>
      <Tags>#Food #Personal</Tags>
    </Infos>
  </Container>
);

export default NoteItem;
