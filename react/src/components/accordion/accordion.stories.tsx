import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";

import "~/index.css";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Demo: Story = {
  render: () => (
    <Accordion type="single">
      <Accordion.Item value="1">
        <Accordion.Trigger>Hello world</Accordion.Trigger>
        <Accordion.Content>
          Vivamus volutpat arcu in blandit ultricies. Pellentesque sed ornare
          tellus, in tincidunt nisl. Vivamus eget nibh rhoncus, placerat risus
          non, euismod metus. Fusce luctus, augue nec tempor fringilla, dolor
          orci.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Trigger>Hello world 2</Accordion.Trigger>
        <Accordion.Content>
          Curabitur pulvinar, ex vel pellentesque ullamcorper, nibh justo
          eleifend dolor, in congue neque nunc at purus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Morbi.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Trigger>Hello world 3</Accordion.Trigger>
        <Accordion.Content>
          Curabitur pulvinar, ex vel pellentesque ullamcorper, nibh justo
          eleifend dolor, in congue neque nunc at purus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Morbi.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
};
