import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  border-radius: 2px;
  padding: 1px 4px;
  margin: 0 4px 4px 0;
  background-color: ${colors.gray};
  font-size: 10px;
  line-height: 14px;
  color: ${colors.black};
`;
