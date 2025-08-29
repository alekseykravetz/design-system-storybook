import AnimatedCard from '../components/AnimatedCard/AnimatedCard';

export default {
  title: 'Components/AnimatedCard',
  component: AnimatedCard,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => (
  <div
    style={{
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <AnimatedCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
