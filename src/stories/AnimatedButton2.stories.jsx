import AnimatedButton2 from '../components/AnimatedButton2/AnimatedButton2';

export default {
  title: 'Components/AnimatedButton2',
  component: AnimatedButton2,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <AnimatedButton2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  variant: 'primary',
  disabled: false,
};
