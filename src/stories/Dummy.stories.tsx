import type { Meta, StoryFn } from "@storybook/react";

const DummyComponent = ({ text }: { text: string }) => <div>{text}</div>;

export default {
  title: "Components/Dummy",
  component: DummyComponent,
} as Meta;

export const Default: StoryFn = () => (
  <DummyComponent text="Hello, Storybook!" />
);
