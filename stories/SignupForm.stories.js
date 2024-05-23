import React from 'react';
import SignupForm from './components/SignupForm/SignUpForm';


export default {
  title: 'Components/SignupForm',
  component: SignupForm,
};

const Template = (args) => <SignupForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
