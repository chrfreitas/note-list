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

export const AddIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  border-radius: 50%;
  border: 1px solid ${colors.blue};
  width: 32px;
  height: 32px;
`;

export const SortIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 50%;
  border: 1px solid ${colors.gray};
  width: 32px;
  height: 32px;
`;
