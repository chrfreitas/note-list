import { render, screen } from '@testing-library/react';
import faker from 'faker';
import React from 'react';

import NoteItem from './note-item';

// eslint-disable-next-line max-lines-per-function
describe('Note Item Component', () => {
  test('shows locker icon when note status is blocked', () => {
    const note = {
      type: 'text',
      title: faker.random.words(),
      subtitle: faker.random.words(),
      date: faker.date.past(),
      tags: [],
      status: 'blocked',
    };

    render(<NoteItem {...note} />);
    const lockerIcon = screen.getByText('locker.svg');

    expect(lockerIcon).toBeInTheDocument();
  });

  test('hides locker icon when note status is different than blocked', () => {
    const note = {
      type: 'text',
      title: faker.random.words(),
      subtitle: faker.random.words(),
      date: faker.date.past(),
      tags: [],
      status: 'pending',
    };

    render(<NoteItem {...note} />);
    const lockerIcon = screen.queryByText('locker.svg');

    expect(lockerIcon).not.toBeInTheDocument();
  });
});
