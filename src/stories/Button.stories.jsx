import Button from "../components/Button.jsx";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Click Me",
  backgroundColor: "red",
  size: "md",
};

export const Blue = Template.bind({});
Blue.args = {
  label: "Click Me",
  backgroundColor: "blue",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  label: "Click Me",
  backgroundColor: "green",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  label: "Click Me",
  backgroundColor: "yellow",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Click Me Very Long Label",
  backgroundColor: "green",
  size: "md",
};
