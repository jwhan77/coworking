import React from 'react';
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ListItem from '../components/List/ListItem';

import img from '../assets/workspace1.jpg';

export default {
  title: 'ListItem',
  component: ListItem,
  args: {
    lat: 37.3595704, 
    lng: 127.105399
  },
  decorators: [
    (Story: Function) => (
      <div style={{width: "300px", border: "1px solid #B7C4CF"}}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

export const Coworking = Template.bind({});
Coworking.args = {
  id: 1,
  name: 'name1',
  type: 'coworking',
  imgSrc: img
}

export const Cafe = Template.bind({});
Cafe.args = {
  id: 2,
  name: 'cafe1',
  type: 'cafe',
  imgSrc: img
}