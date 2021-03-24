import React from 'react';

import { ReactComponent as SkeletonSvg } from '../../assets/icons/skeleton.svg';
import { Container } from './list-skeleton-loader.styles';

interface IListSkeletonLoader {
  quantity: number;
}

const ListSkeletonLoader = ({ quantity }: IListSkeletonLoader) => (
  <Container>
    {Array(quantity)
      .fill(0)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonSvg key={index} />
      ))}
  </Container>
);

export default ListSkeletonLoader;
