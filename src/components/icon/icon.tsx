import React from 'react';

import { Container } from './icon.styles';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as SortDescending } from '../../assets/icons/sort-descending.svg';

export interface IProps {
  type: 'plus' | 'sort-descending';
  color: string;
  width: number;
  height: number;
}

const generateSvg = (type: string) => {
  switch (type) {
    case 'plus':
      return <Plus />;
    case 'sort-descending':
      return <SortDescending />;
    default:
      return <Plus />;
  }
};

const Icon = ({ type, color, width, height }: IProps) => (
  <Container color={color} width={width} height={height}>
    {generateSvg(type)}
  </Container>
);

export default Icon;
