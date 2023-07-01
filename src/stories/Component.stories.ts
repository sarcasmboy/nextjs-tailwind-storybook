import type { Meta, StoryObj } from '@storybook/react';

import Component from '../app/Component';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Component> = {
  title: 'Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['built-in', 'extended'],
      control: { type: 'radio' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BuiltIn: Story = {
  args: {
    variant: 'built-in',
  },
};

export const Extended: Story = {
  args: {
    variant: 'extended',
  },
};
