import React from 'react';
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import List from '../components/List/List';

import { data } from '../data';

export default {
  title: 'List',
  component: List,
  decorators: [
    (Story: Function) => (
      <div style={{width: "300px"}}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Items5 = Template.bind({});
Items5.args = {
  items: data
}