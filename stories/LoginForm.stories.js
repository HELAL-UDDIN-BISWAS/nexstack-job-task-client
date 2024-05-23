import LoginForm from './LoginForm';
import './LoginForm.css'

export default {
  title: 'Example/LoginForm',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => {
    console.log('Login data:', data);
  },
};