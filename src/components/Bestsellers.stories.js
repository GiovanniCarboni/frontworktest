import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';
import shoeOne from '../images/shoe1.png';
import shoeTwo from '../images/shoe2.png';
import shoeThree from '../images/shoe3.png';

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },
};

const Story = (args) => <Bestsellers {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  title: 'Bestsellers',
  productOne: ['Nike Air Max 270', 'Nike', '$195.80', shoeOne],
  productTwo: ['Nike Air Max 90', 'Nike', '$195.80', shoeTwo],
  productThree: ['Nike Air Max Plus', 'Nike', '$195.80', shoeThree],
};
