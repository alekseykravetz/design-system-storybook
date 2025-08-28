import AnimatedButton4 from '../components/AnimatedButton4/AnimatedButton4';

export default {
  title: 'Components/AnimatedButton4',
  component: AnimatedButton4,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <AnimatedButton4 {...args} />;

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
};

export const Delete = Template.bind({});
Delete.args = {
  children: 'Delete',
  variant: 'danger',
  disabled: false,
  size: 'lg',
  rounded: true,
  fullWidth: false,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
  disabled: false,
  size: 'sm',
  rounded: false,
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  variant: 'primary',
  disabled: true,
  size: 'md',
  rounded: false,
  fullWidth: false,
};
