import React from 'react';
import { render, screen } from '@testing-library/react';

import NoteTags from './note-tags';

test('tags rendering with # and with capitalized', () => {
  const tags = ['personal', 'tech', 'study'];

  render(<NoteTags tags={tags} />);

  const personalTag = screen.getByText('# Personal');
  const techTag = screen.getByText('# Tech');
  const studyTag = screen.getByText('# Study');

  expect(personalTag).toBeInTheDocument();
  expect(techTag).toBeInTheDocument();
  expect(studyTag).toBeInTheDocument();
});
