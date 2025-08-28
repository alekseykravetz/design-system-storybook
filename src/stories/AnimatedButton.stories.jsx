import AnimatedButton from '../components/AnimatedButton/AnimatedButton';

export default {
  title: 'Components/AnimatedButton',
  component: AnimatedButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <AnimatedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
