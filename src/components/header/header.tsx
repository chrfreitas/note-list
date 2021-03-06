import React from 'react';
import { NotesOrder } from '../../interfaces/note';

import { colors } from '../../styles/colors';
import Icon from '../icon/icon';
import { IHeaderProps } from './header.interfaces';
import {
  AddIcon,
  Container,
  Title,
  SortIcon,
  CloseIcon
} from './header.styles';

const Header = ({
  order,
  numberOfSelected,
  add,
  toggleOrder,
  clear
}: IHeaderProps) => (
  <Container>
    {numberOfSelected ? (
      <>
        <Title>{numberOfSelected} items selected</Title>
        <span />
        <CloseIcon onClick={clear}>
          <Icon type="close" color={colors.darkGray} width={18} height={14} />
        </CloseIcon>
      </>
    ) : (
      <>
        <Title>Notes</Title>
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
