import { CodeBlock, PreviewRect } from "@components";
import { cn } from "@lib";
import { Tabs } from "@tredici";
import React, { ReactNode } from "react";

type PreviewTabsProps = {
  demo: ReactNode;
  demoCode: string;
  className?: string;
};

const PreviewTabs: React.FC<PreviewTabsProps> = ({
  demo,
  demoCode,
  className
}) => {
  return (
    <Tabs
      defaultValue="preview"
      className={cn("mt-12", className)}
      variant="flushed"
    >
      <Tabs.List>
        <Tabs.Trigger value="preview" className="px-12">
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger value="code" className="px-12">
          Code
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview">
        <PreviewRect className="relative">{demo}</PreviewRect>
      </Tabs.Content>
      <Tabs.Content value="code">
        <CodeBlock code={demoCode} language="typescript" />
      </Tabs.Content>
    </Tabs>
  );
};

export { PreviewTabs };
