import React, { ComponentProps } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import NoteItem from './note-item';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
  select: () => {},
  clear: () => {}
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
