import React from 'react'

import { Divider } from './Divider'

export default {
  title: 'Example/Divider',
  component: Divider,
  argTypes: {
    color: { control: 'color' }
  }
}

const Template = (args) => <Divider {...args} />

export const Thin = Template.bind({})
Thin.args = {
  thick: 'thin',
}

export const Medium = Template.bind({})
Medium.args = {
  thick: 'medium',
}

export const Thick = Template.bind({})
Thick.args = {
  thick: 'thick',
}

export const Light = Template.bind({})
Light.args = {
  strength: 'light',
  thick: 'medium',
}

export const Dark = Template.bind({})
Dark.args = {
  strength: 'dark',
  thick: 'medium',
}

