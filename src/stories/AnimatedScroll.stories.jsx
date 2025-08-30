import ScrollExample from '../components/animated/AnimatedScrollInEffect/ScrollExample';

export default {
  title: 'Animated/AnimatedScroll',
  component: ScrollExample,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <ScrollExample {...args} />;

export const Default = Template.bind({});
Default.args = {
  // children: 'Default',
};
