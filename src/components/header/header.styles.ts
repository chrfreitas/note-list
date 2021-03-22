import styled from 'styled-components';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: 16px 12px;
  border-bottom: 1px solid ${colors.gray};
`;

const Title = styled.h2`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`;

export { Container, Title };
