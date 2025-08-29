import AnimatedButton5 from '../components/AnimatedButton5/AnimatedButton5';

export default {
  title: 'Components/AnimatedButton5',
  component: AnimatedButton5,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <AnimatedButton5 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  variant: 'primary',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
  iconLeft: 'L',
  iconRight: 'R',
  loading: false,
};

export const Delete = Template.bind({});
Delete.args = {
  children: 'Delete',
  variant: 'danger',
  disabled: false,
  size: 'lg',
  rounded: true,
  fullWidth: false,
  loading: false,
  iconLeft: 'L',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
  disabled: false,
  size: 'sm',
  rounded: false,
  fullWidth: true,
  loading: false,
  iconLeft: 'L',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  variant: 'primary',
  disabled: true,
  size: 'md',
  rounded: false,
  fullWidth: false,
  loading: false,
  iconRight: 'R',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading',
  variant: 'primary',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
  iconLeft: 'L',
  iconRight: 'R',
  loading: true,
};
