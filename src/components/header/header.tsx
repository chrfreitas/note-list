import React from 'react';
import { NotesOrder } from '../../interfaces/note';

import { colors } from '../../styles/colors';
import Icon from '../icon/icon';
import { IHeaderProps } from './header.interfaces';
import { AddIcon, Container, Title, SortIcon } from './header.styles';

const Header = ({
  order,
  numberOfSelected,
  add,
  toggleOrder
}: IHeaderProps) => (
  <Container>
    {numberOfSelected ? (
      <Title>{numberOfSelected} items selected</Title>
    ) : (
      <>
        <SortIcon data-testid="sort-button" onClick={toggleOrder}>
          <Icon
            type={
              order === NotesOrder.descending
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
