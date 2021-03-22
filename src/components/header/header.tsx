import React from 'react';

import { colors } from '../../styles/colors';
import Icon from '../icon/icon';
import { AddIcon, Container, Title, SortIcon } from './header.styles';

const Header = () => (
  <Container>
    <Title>Notes</Title>

    <SortIcon>
      <Icon
        type="sort-descending"
        color={colors.darkGray}
        width={18}
        height={14}
      />
    </SortIcon>

    <AddIcon>
      <Icon type="plus" color={colors.gray} width={14} height={14} />
    </AddIcon>
  </Container>
);

export default Header;
