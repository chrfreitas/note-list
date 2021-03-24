import React from 'react';
import faker from 'faker';
import { fireEvent, render, screen } from '@testing-library/react';

import NoteList from './note-list';
import DataSource from '../../services/datasource/datasource';

const mockNotes = [
  {
    id: faker.random.uuid(),
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    date: new Date('2021-01-12'),
    tags: ['studies'],
    status: 'pending',
    type: 'text',
    selected: false
  },
  {
    id: faker.random.uuid(),
    title: 'Title 2',
    subtitle: 'Subtitle 2',
    date: new Date('2021-01-17'),
    tags: ['work', 'task'],
    status: 'block',
    type: 'text',
    selected: false
  },
  {
    id: faker.random.uuid(),
    title: 'Title 3',
    subtitle: 'Subtitle 3',
    date: new Date('2021-01-25'),
    tags: ['friend'],
    status: 'done',
    type: 'text',
    selected: false
  }
];

// eslint-disable-next-line max-lines-per-function
describe('Note List Container', () => {
  beforeEach(() => {
    DataSource.getNotes = () => mockNotes;
  });

  it('adds a new item in the note list', () => {
    render(<NoteList />);

    const oldNoteItems = screen.getAllByTestId('note-item');
    const addButton = screen.getByTestId('add-button');

    fireEvent.click(addButton);
    const newNoteItems = screen.getAllByTestId('note-item');

    expect(newNoteItems).toHaveLength(oldNoteItems.length + 1);
  });

  it('sorts the node list to descending', () => {
    render(<NoteList />);

    const noteItems = screen.getAllByTestId('note-item-title');
    expect(noteItems[0]).toHaveTextContent('Title 3');
    expect(noteItems[1]).toHaveTextContent('Title 2');
    expect(noteItems[2]).toHaveTextContent('Title 1');

    const sortButton = screen.getByTestId('sort-button');
    fireEvent.click(sortButton);

    const noteItemsAfterOrder = screen.getAllByTestId('note-item-title');
    expect(noteItemsAfterOrder[0]).toHaveTextContent('Title 1');
    expect(noteItemsAfterOrder[1]).toHaveTextContent('Title 2');
    expect(noteItemsAfterOrder[2]).toHaveTextContent('Title 3');
  });

  it('selects two items and should show a counter in the header', () => {
    render(<NoteList />);

    const [firstNote, secondNote] = screen.getAllByTestId('note-item');
    fireEvent.click(firstNote, { metaKey: true });
    fireEvent.click(secondNote, { metaKey: true });

    const header = screen.getByText('2 items selected');

    expect(header).toBeInTheDocument();
  });
});
