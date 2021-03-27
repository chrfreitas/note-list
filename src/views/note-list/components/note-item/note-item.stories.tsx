import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NoteItem from './note-item';

const NoteItemStoryBook = {
  title: 'NoteItem',
  component: NoteItem
};

const Template: Story<ComponentProps<typeof NoteItem>> = (args) => (
  <NoteItem {...args} />
);

export const HeaderDefault = Template.bind({});
HeaderDefault.args = {
  id: '1',
  type: 'text-paragraph',
  title: 'Title 1',
  subtitle: 'Subtitle 1',
  date: new Date('2021-01-19 12:30'),
  tags: ['studies', 'spanish'],
  status: 'pending',
  selected: false,
  onSelect: () => {},
  onClear: () => {}
};

export const HeaderSelected = Template.bind({});
HeaderSelected.args = {
  ...HeaderDefault.args,
  selected: true
};

export const HeaderBlocked = Template.bind({});
HeaderBlocked.args = {
  ...HeaderDefault.args,
  status: 'blocked'
};

export default NoteItemStoryBook;
