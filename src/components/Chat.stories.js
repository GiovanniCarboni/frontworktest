import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Chat } from './Chat';
import image from '../images/Image.png';

export default {
  title: 'Component/Chat',
  component: Chat,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png',
    },
  },
};

const Story = (args) => <Chat {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  name: 'Emily Dougrer',
  position: 'Developer',
  label: 'Hi there.👋 We use Boards to share initial goals and ideas',
  backgroundColor: '#4643D3',
  image,
};
