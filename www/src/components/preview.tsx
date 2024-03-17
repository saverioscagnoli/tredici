import { cn } from "@lib";
import { Button, Collapsible, Tabs } from "@tredici";
import hljs from "highlight.js";

import React, { ReactNode, useEffect, useState } from "react";
import { CopyButton } from "./copy-button";

type PreviewProps = {
  children?: ReactNode;
  componentUrl: string;
  cssUrl?: string;
  className?: string;
  previewLength?: number;
};

const Preview: React.FC<PreviewProps> = ({
  componentUrl,
  cssUrl,
  children,
  className,
  previewLength = 8
}) => {
  const [tsx, setTsx] = useState<string>("");
  const [css, setCss] = useState<string>("");

  const [tsxNode, setTsxNode] = useState<ReactNode | null>(null);
  const [cssNode, setCssNode] = useState<ReactNode | null>(null);

  const tsxPreview = tsx
    .split("\n")
    .slice(0, previewLength)
    .concat("\n".repeat(2))
    .join("\n");
  const cssPreview = css?.split("\n").slice(0, previewLength).join("\n");

  const fetchCode = async () => {
    let codes = [];

    let res = await fetch(componentUrl);
    let data = await res.text();

    codes.push(data);

    if (cssUrl) {
      let res = await fetch(cssUrl);
      let css = await res.text();
      codes.push(css);
    }

    return codes as [string, string];
  };

  useEffect(() => {
    fetchCode().then(([tsx, css]) => {
      setTsx(tsx + "\n".repeat(3));
      setCss(css);
    });
  }, []);

  useEffect(() => {
    if (tsx !== "") {
      let __html = hljs.highlight(tsx, { language: "typescript" }).value;
      setTsxNode(
        <code dangerouslySetInnerHTML={{ __html }} className="bg-[--slate-1]" />
      );

      if (css) {
        let __html = hljs.highlight(css, { language: "css" }).value;
        setCssNode(
          <code
            dangerouslySetInnerHTML={{ __html }}
            className="bg-[--slate-1]"
          />
        );
      }
    }
  }, [tsx]);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="mt-8 flex flex-col">
      <div
        className={cn(
          "h-[250px]",
          "grid place-items-center",
          "rounded-lg rounded-b-none",
          "bg-[--slate-1]",
          "border border-[--gray-7]",
          className
        )}
      >
        {children}
      </div>
      <Tabs defaultValue="tsx">
        <Tabs.List className="rounded-none bg-[--slate-1] border-t-0 border-b-0 ">
          <Tabs.Trigger className="px-20" value="tsx">
            {componentUrl.split("/").pop()}
          </Tabs.Trigger>
          {cssUrl && (
            <Tabs.Trigger className="px-20" value="css">
              {cssUrl.split("/").pop()}
            </Tabs.Trigger>
          )}
        </Tabs.List>
        <Tabs.Content
          value="tsx"
          className="p-6 bg-[--slate-1] border border-[--gray-7] rounded-lg rounded-t-none !mt-0 relative"
        >
          <CopyButton text={tsx} className="absolute right-4 top-4 z-50" />
          {!open && (
            <pre className="overflow-x-auto font-mono">
              <code
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(tsxPreview, { language: "typescript" })
                    .value
                }}
              />
            </pre>
          )}
          <Collapsible open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className={`absolute ${
                  open ? "bottom-6" : "bottom-0"
                } right-1/2 translate-x-1/2`}
              >
                {open ? "Collapse" : "Expand"}
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <pre className="overflow-x-auto font-mono">{tsxNode}</pre>
            </Collapsible.Content>
          </Collapsible>
        </Tabs.Content>
        {cssUrl && (
          <Tabs.Content
            value="css"
            className="p-6 bg-[--slate-1] border border-[--gray-7] rounded-lg rounded-t-none !mt-0 relative"
          >
            <CopyButton text={css} className="absolute right-4 top-4" />

            <pre className="overflow-x-auto font-mono">
              <code
                dangerouslySetInnerHTML={{
                  __html: hljs.highlight(cssPreview, { language: "css" }).value
                }}
              />
            </pre>

            <Collapsible open={open} onOpenChange={setOpen}>
              <Collapsible.Trigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-0 right-1/2 translate-x-1/2"
                >
                  {open ? "Collapse" : "Expand"}
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <pre className="overflow-x-auto font-mono">{cssNode}</pre>
              </Collapsible.Content>
            </Collapsible>
          </Tabs.Content>
        )}
      </Tabs>
    </div>
  );
};

export { Preview };
