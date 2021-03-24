import React from 'react';
import { OrderType } from '../../services/utils/utils';

import { colors } from '../../styles/colors';
import Icon from '../icon/icon';
import { AddIcon, Container, Title, SortIcon } from './header.styles';

interface IHeaderProps {
  order: OrderType;
  selectedNotes: number;
  add: () => void;
  toggleOrder: () => void;
}

const Header = ({ order, selectedNotes, add, toggleOrder }: IHeaderProps) => (
  <Container>
    {selectedNotes ? (
      <Title>{selectedNotes} items selected</Title>
    ) : (
      <>
        <Title>Notes</Title>
        <SortIcon data-testid="sort-button" onClick={toggleOrder}>
          <Icon
            type={
              order === OrderType.descending
                ? 'sort-descending'
                : 'sort-ascending'
            }
            color={colors.darkGray}
            width={18}
            height={14}
          />
        </SortIcon>
        <AddIcon data-testid="add-button" onClick={add}>
          <Icon type="plus" color={colors.gray} width={14} height={14} />
        </AddIcon>
      </>
    )}
  </Container>
);

export default Header;
