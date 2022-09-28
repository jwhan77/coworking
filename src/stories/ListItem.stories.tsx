import React from 'react';
import { Meta, Story } from "@storybook/react";
import ListItem from '../components/List/ListItem';

import img from '../assets/workspace1.jpg';

export default {
  title: 'ListItem',
  component: ListItem,
  decorators: [
    (Story: Function) => (
      <div style={{width: "300px"}}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof ListItem>;

const Template: Story<typeof ListItem> = (args) => (
  <ListItem {...args} />
)

export const Item1: Story<typeof ListItem> = Template.bind({});
Item1.args = {
  imgSrc: img,
  name: "cafe 1"
}
