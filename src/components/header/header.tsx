import React from 'react';
import { OrderType } from '../../services/utils/utils';

import { colors } from '../../styles/colors';
import Icon from '../icon/icon';
import { AddIcon, Container, Title, SortIcon } from './header.styles';

interface IHeaderProps {
  order: OrderType;
  toggleOrder: () => void;
}

const Header = ({ order, toggleOrder }: IHeaderProps) => (
  <Container>
    <Title>Notes</Title>

    <SortIcon onClick={toggleOrder}>
      <Icon
        type={
          order === OrderType.descending ? 'sort-ascending' : 'sort-descending'
        }
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
