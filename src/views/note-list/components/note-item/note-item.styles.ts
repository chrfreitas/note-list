import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 0 12px;
  padding: 16px 0 0 10px;
  border-left: 4px solid transparent;
  cursor: pointer;
  transition: border-left 0.2s;

  ${({ selected }) => selected && `border-left: 4px solid ${colors.blue};`};

  :hover {
    background-color: ${colors.lightGray};
  }
`;

export const Infos = styled.div`
  border-bottom: 1px solid ${colors.gray};
  padding: 0 14px 16px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 2px 0;
`;

export const Title = styled.div`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${colors.black};
`;

export const Subtitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${colors.black};
  margin: 0 0 4px 0;
`;
