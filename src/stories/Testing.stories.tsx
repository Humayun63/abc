import React from 'react';
// @ts-ignore
import { Meta, Story } from '@storybook/react';
// @ts-ignore
import Preview from './../preview/Preview.jsx'
const meta: Meta = {
  title: 'Welcome',
  component: Preview,
};

export default meta;

// @ts-ignore
const Template: Story<Props> = args => <Preview/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
