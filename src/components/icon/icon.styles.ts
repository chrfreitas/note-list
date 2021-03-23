import styled from 'styled-components';

export interface StyledProps {
  color: string;
  width: number;
  height: number;
}

export const Container = styled.div<StyledProps>`
  svg {
    fill: ${(props) => props.color};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
  }
`;
