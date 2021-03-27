import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 32px 32px;
  gap: 0 12px;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid ${colors.gray};
  height: 52px;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background: white;

  svg {
    display: block;
  }
`;

export const AddIcon = styled(Button)`
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
`;

export const SortIcon = styled(Button)`
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
`;

export const CloseIcon = styled(Button)`
  cursor: pointer;

  svg {
    display: block;
  }
`;
