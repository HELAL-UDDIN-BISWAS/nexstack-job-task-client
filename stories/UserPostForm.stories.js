// FormComponent.stories.js
import React from 'react';

import UserPostForm from './components/UserPostForm/UserPostForm';

export default {
  title: 'Example/UserPostForm',
  component: UserPostForm,
};

const Template = (args) => <UserPostForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
