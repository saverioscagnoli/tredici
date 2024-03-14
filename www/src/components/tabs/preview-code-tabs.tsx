import { useTheme } from "@hooks";
import { Button, Collapsible, Tabs } from "@tredici";
import React, { ComponentProps, ReactNode, useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneLight,
  atomOneDark
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const code = `import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

import "@radix-ui/colors/gray-alpha.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "./alert-dialog.css";

type AlertDialogComponent = typeof RxAlertDialog.Root & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

type AlertDialogProps = RxAlertDialog.AlertDialogProps;

const AlertDialog = RxAlertDialog.Root as AlertDialogComponent;

type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;

const AlertDialogTrigger = RxAlertDialog.Trigger;

type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps;

const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAlertDialog.Portal>
        <RxAlertDialog.Overlay
          className={cn(
            "bg-[--gray-a11]",
            "fixed inset-0",
            "alert-dialog-overlay"
          )}
        />
        <RxAlertDialog.Content
          className={cn(
            "w-11/12 max-w-[500px] max-h-[85vh]",
            "p-5",
            "rounded-md",
            "shadow-lg",
            ["bg-[--slate-1]", "text-[--slate-12]"],
            "border border-[--gray-6]",
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "focus:outline-none",
            "alert-dialog-content",
            className
          )}
          ref={ref}
          {...props}
        />
      </RxAlertDialog.Portal>
    );
  }
);

type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps;

const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAlertDialog.Title
        className={cn("text-xl font-bold", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type AlertDialogDescriptionProps = RxAlertDialog.AlertDialogDescriptionProps;

const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <RxAlertDialog.Description
      className={cn("mt-2", className)}
      {...props}
      ref={ref}
    />
  );
});

type AlertDialogCancelProps = RxAlertDialog.AlertDialogCancelProps;

const AlertDialogCancel = RxAlertDialog.Cancel;

type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps;

const AlertDialogAction = RxAlertDialog.Action;

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

AlertDialog.displayName = RxAlertDialog.Root.displayName;

export { AlertDialog };
export type {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogCancelProps,
  AlertDialogActionProps
};`;

type TabElementProps = {
  children: ReactNode;
};

const PreviewCodeTabs: React.FC<TabElementProps & ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const previewLines = code.split("\n").slice(0, 5).join("\n"); // Adjust this to control how many lines to show in the preview

  return (
    <div className="flex flex-col" {...props}>
      <div className="w-full h-[250px] flex items-center justify-center border border-[--gray-7] rounded-lg rounded-b-none bg-[--slate-1]">
        {children}
      </div>
      <Tabs defaultValue="index.ts">
        <Tabs.List className="rounded-none border-t-0 bg-[--slate-1]">
          <Tabs.Trigger className="px-24" value="index.ts">
            index.ts
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="index.ts"
          className="border border-[--gray-7] border-t-0 rounded rounded-t-none !mt-0"
        >
          <div className="relative min-h-[150px]">
            <Collapsible open={open}>
              <Collapsible.Content>
                <SyntaxHighlighter
                  language="typescript"
                  style={theme === "dark" ? atomOneDark : atomOneLight}
                  customStyle={{
                    padding: "1rem",
                    background: "var(--slate-1)"
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </Collapsible.Content>
            </Collapsible>
            <Button
              size="sm"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
              onClick={() => setOpen(!open)}
            >
              {open ? "Collapse" : "Expand"}
            </Button>
            {!open && (
              <div className="overflow-hidden min-h-[150px] preview-container">
                <SyntaxHighlighter
                  language="typescript"
                  style={theme === "dark" ? atomOneDark : atomOneLight}
                  customStyle={{
                    padding: "1rem",
                    background: "var(--slate-1)"
                  }}
                >
                  {previewLines}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export { PreviewCodeTabs };
