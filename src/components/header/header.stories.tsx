import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Header from './header';
import { NotesOrder } from '../../interfaces/note';

const HeaderStoryBook = {
  title: 'Header',
  component: Header
};

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const HeaderStory = Template.bind({});
HeaderStory.args = {
  order: NotesOrder.descending,
  numberOfSelected: 0,
  add: () => {},
  toggleOrder: () => {}
};

export default HeaderStoryBook;
