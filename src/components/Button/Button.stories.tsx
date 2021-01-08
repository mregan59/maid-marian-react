import { action } from '@storybook/addon-actions';
import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
import React, { ComponentProps } from 'react';
import { Button } from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
};

const Template = (args: any) => (<Button {...args} />);

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Primary Args',

};
export const PrimaryB = Template.bind({});
PrimaryB.args = {
    color: 'secondary',
    variant: 'contained',
    children: 'Primary Args',
};

{
    /* <Preview>
  <Story name="Default">
    <Button variant="contained" onClick={action("Default button clicked")}>Default</Button>
  </Story>
  <Story name="Primary">
    <Button variant="contained" color="primary" onClick={action("Primary button clicked")}>Primary</Button>
  </Story>
  <Story name="Secondary">
    <Button variant="contained" color="secondary" onClick={action("Secondary button clicked")}>Secondary</Button>
  </Story>
</Preview>


<Props of={Button} /> */
}
