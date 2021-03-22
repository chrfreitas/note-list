import { render, screen } from '@testing-library/react';
import React from 'react';
import MockDate from 'mockdate';

import NoteDate from './note-date';

// eslint-disable-next-line max-lines-per-function
describe('Note Date Component', () => {
  afterEach(() => {
    MockDate.reset();
  });

  test('renders the date as today ', () => {
    MockDate.set('2020-03-25 15:30');

    render(<NoteDate date={new Date()} />);
    const todayText = screen.getByText('Today, 15:30');

    expect(todayText).toBeInTheDocument();
  });

  test('renders the date as yesterday ', () => {
    MockDate.set('2020-03-25 15:30');
    const yesterday = new Date('2020-03-24 10:30');

    render(<NoteDate date={yesterday} />);
    const yesterdayText = screen.getByText('Yesterday, 10:30');

    expect(yesterdayText).toBeInTheDocument();
  });

  test('renders full date, in other worlds with date, year and hour ', () => {
    const date = new Date('2020-03-24 10:30');

    render(<NoteDate date={date} />);
    const dateText = screen.getByText('Mar 24, 2020, 10:30');

    expect(dateText).toBeInTheDocument();
  });
});
