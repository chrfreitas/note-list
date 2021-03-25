import React, { ComponentProps } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import Header from './header';
import { NotesOrder } from '../../interfaces/note';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
