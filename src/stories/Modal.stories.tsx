import React from 'react';
import type { ComponentMeta, ComponentStory } from "@storybook/react"
import Modal from '../components/Modal/Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Right = Template.bind({});
Right.decorators = [
  (Story: Function) => (
    <div style={{width: "90vw", height: "90vh"}}>
      <Story />
    </div>
  )
]