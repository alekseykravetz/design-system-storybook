import AnimatedButton3 from '../components/AnimatedButton3/AnimatedButton3';

export default {
  title: 'Components/AnimatedButton3',
  component: AnimatedButton3,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <AnimatedButton3 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  variant: 'primary',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
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
