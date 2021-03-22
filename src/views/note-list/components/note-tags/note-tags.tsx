import React from 'react';
import { capitalize } from '../../../../utils/utils';

import { Container, Tag } from './note-tags.styles';

interface INoteTagProps {
  tags: string[];
}

const NoteTags = ({ tags }: INoteTagProps) => (
  <Container>
    {tags.map((tag) => (
      <Tag key={tag}># {capitalize(tag)}</Tag>
    ))}
  </Container>
);

export default NoteTags;
