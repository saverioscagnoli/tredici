import React, { ReactNode, useEffect, useState } from "react";

import { CodeBlock } from "./code-block";
import { Tabs } from "@tredici";

type PreviewProps = {
  componentUrl: string;
  cssUrl?: string;
  className?: string;
};

const CodeTabs: React.FC<PreviewProps> = ({
  componentUrl,
  cssUrl,
  className
}) => {
  const [tsx, setTsx] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const tsxName = componentUrl.split("/").pop()!;
  const cssName = cssUrl?.split("/").pop()!;

  useEffect(() => {
    fetch(componentUrl)
      .then(res => res.text())
      .then(data => {
        setTsx(data);
      });

    if (cssUrl) {
      fetch(cssUrl)
        .then(res => res.text())
        .then(data => {
          setCss(data);
        });
    }
  }, []);

  return (
    <Tabs defaultValue="tsx" variant="flushed" className={className}>
      <Tabs.List>
        <Tabs.Trigger value="tsx">{tsxName}</Tabs.Trigger>
        {cssUrl && <Tabs.Trigger value="css">{cssName}</Tabs.Trigger>}
      </Tabs.List>
      <Tabs.Content value="tsx">
        <CodeBlock code={tsx} language="typescript" />
      </Tabs.Content>
      {cssUrl && (
        <Tabs.Content value="css">
          <CodeBlock code={css} language="css" />
        </Tabs.Content>
      )}
    </Tabs>
  );
};

export { CodeTabs };
