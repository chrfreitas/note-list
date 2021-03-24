import React from 'react';

import { capitalize } from '../../../../services/utils/utils';
import { Container, Tag } from './note-tags.styles';
import { INoteTagProps } from './note-tags.interfaces';

const NoteTags = ({ tags }: INoteTagProps) => (
  <Container>
    {tags.map((tag) => (
      <Tag key={tag}># {capitalize(tag)}</Tag>
    ))}
  </Container>
);

export default NoteTags;
