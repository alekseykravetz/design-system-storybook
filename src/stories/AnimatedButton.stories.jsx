import AnimatedButton from '../components/animated/AnimatedButton/AnimatedButton';

export default {
  title: 'Animated/AnimatedButton',
  component: AnimatedButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => (
  <div
    style={{
      width: 500,
      height: 200,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <AnimatedButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
  iconLeft: 'L',
  iconRight: 'R',
  loading: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
  iconLeft: 'L',
  iconRight: 'R',
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
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

export const AutoLoading = Template.bind({});
AutoLoading.args = {
  children: 'Save',
  variant: 'primary',
  disabled: false,
  size: 'md',
  rounded: false,
  fullWidth: false,
  iconLeft: 'L',
  iconRight: 'R',
  loading: false,
  autoLoading: true,
  onClick: async () => {
    await new Promise((res) => setTimeout(res, 2000));
  },
};
