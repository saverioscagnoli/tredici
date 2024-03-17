import { Tabs, TabsProps } from "@tredici";
import React from "react";
import { CodeBlock } from "./code-block";

type ModuleInstallTabsProps = TabsProps & {
  packages: string[];
};

const ModuleInstallTabs: React.FC<ModuleInstallTabsProps> = ({
  packages,
  ...props
}) => {
  const packageString = packages.join(" ");

  return (
    <Tabs variant="flushed" defaultValue="npm" {...props}>
      <Tabs.List>
        <Tabs.Trigger value="npm">npm</Tabs.Trigger>
        <Tabs.Trigger value="yarn">yarn</Tabs.Trigger>
        <Tabs.Trigger value="pnpm">pnpm</Tabs.Trigger>
        <Tabs.Trigger value="bun">bun</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="npm">
        <CodeBlock code={`npm i ${packageString}`} language="bash" />
      </Tabs.Content>
      <Tabs.Content value="yarn">
        <CodeBlock code={`yarn add ${packageString}`} language="bash" />
      </Tabs.Content>
      <Tabs.Content value="pnpm">
        <CodeBlock code={`pnpm add ${packageString}`} language="bash" />
      </Tabs.Content>

      <Tabs.Content value="bun">
        <CodeBlock code={`bun add ${packageString}`} language="bash" />
      </Tabs.Content>
    </Tabs>
  );
};

export { ModuleInstallTabs };
