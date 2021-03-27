import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as SkeletonSvg } from '../../assets/icons/skeleton.svg';
import { Container } from './list-skeleton-loader.styles';

interface IListSkeletonLoader {
  quantity: number;
}

const ListSkeletonLoader = ({ quantity }: IListSkeletonLoader) => (
  <Container>
    {Array(quantity)
      .fill(0)
      .map((item) => (
        <SkeletonSvg key={uuidv4()} />
      ))}
  </Container>
);

export default ListSkeletonLoader;
