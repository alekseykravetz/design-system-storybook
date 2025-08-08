import Stack from '../components/Stack.jsx';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 },
  },
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((i) => (
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {i + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  spacing: 0,
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: true,
};
