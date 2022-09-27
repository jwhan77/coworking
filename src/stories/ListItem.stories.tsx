import React from 'react';

import ListItem from '../components/List/ListItem';

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
}

const Template = (args: object) => <ListItem {...args} />

export const Item1 = Template.bind({});
