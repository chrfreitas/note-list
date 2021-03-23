import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 0 12px;
  padding: 16px 0 0 14px;
`;

export const Infos = styled.div`
  border-bottom: 1px solid ${colors.gray};
  padding: 0 14px 16px 0;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${colors.black};
  margin: 0 0 2px 0;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${colors.black};
  margin: 0 0 4px 0;
`;
