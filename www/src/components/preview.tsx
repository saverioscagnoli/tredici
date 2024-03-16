import { cn } from "@lib";
import { AlertDialog, Button, Tabs } from "@tredici";
import hljs from "highlight.js";

import React, { ReactNode, useEffect, useState } from "react";

import "highlight.js/styles/github.css";


type PreviewProps = {
  componentUrl: string;
  cssUrl?: string;
};

const Preview: React.FC<PreviewProps> = ({ componentUrl, cssUrl }) => {
  const [tsx, setTsx] = useState<string>("");
  const [css, setCss] = useState<string>("");

  const [tsxNode, setTsxNode] = useState<ReactNode | null>(null);
  const [cssNode, setCssNode] = useState<ReactNode | null>(null);

  const [tab, setTab] = useState<"tsx" | "css">("tsx");

  const audio = new Audio("/bokudan.mp3");

  const play = () => {
    audio.play();
  };

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
    fetchCode().then(data => {
      setTsx(data[0]);
      setCss(data[1]);
    });
  }, []);

  useEffect(() => {
    if (tsx !== "") {
      let tsxNode = hljs.highlight(tsx, { language: "typescript" }).value;
      setTsxNode(
        <code
          dangerouslySetInnerHTML={{ __html: tsxNode }}
          className="bg-[--slate-1]"
        />
      );

      if (css) {
        let cssNode = hljs.highlight(css, { language: "css" }).value;
        setCssNode(
          <code
            dangerouslySetInnerHTML={{ __html: cssNode }}
            className="bg-[--slate-1]"
          />
        );
      }
    }
  }, [tsx]);

  return (
    <div className="mt-8 flex flex-col">
      <div
        className={cn(
          "h-[250px]",
          "grid place-items-center",
          "rounded-lg rounded-b-none",
          "bg-[--slate-1]",
          "border border-[--gray-7]"
        )}
      >
        <AlertDialog>
          <AlertDialog.Trigger asChild>
            <Button>Open Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Yoshikage Kira</AlertDialog.Title>
            <AlertDialog.Description>
              Killer Queen has already touched the dialog!
            </AlertDialog.Description>
            <div className="flex justify-end gap-4 mt-4">
              <AlertDialog.Cancel asChild>
                <Button variant="secondary" colorScheme="b/w">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button colorScheme="red" onClick={play}>
                  Confirm
                </Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog>
      </div>
      <Tabs
        defaultValue="tsx"
        onValueChange={v => setTab(v as any)}
        value={tab}
      >
        <Tabs.List className="rounded-none bg-[--slate-1] border-t-0 border-b-0 ">
          <Tabs.Trigger className="px-20" value="tsx">
            tsx
          </Tabs.Trigger>
          {cssUrl && (
            <Tabs.Trigger className="px-20" value="css">
              css
            </Tabs.Trigger>
          )}
        </Tabs.List>
        <Tabs.Content
          value="tsx"
          className="p-6 bg-[--slate-1] border border-[--gray-7] rounded-lg rounded-t-none !mt-0"
        >
          <pre className="overflow-x-auto font-mono">{tsxNode}</pre>
        </Tabs.Content>
        {cssUrl && (
          <Tabs.Content
            value="css"
            className="p-6 bg-[--slate-1] border border-[--gray-7] rounded-lg rounded-t-none !mt-0"
          >
            <pre className="overflow-x-auto font-mono">{cssNode}</pre>
          </Tabs.Content>
        )}
      </Tabs>
    </div>
  );
};

export { Preview };
