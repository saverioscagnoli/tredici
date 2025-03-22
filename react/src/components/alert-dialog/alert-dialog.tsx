import React from "react";
import { AlertDialog as RxAlertDialog } from "radix-ui";
import { cn } from "~/lib/utils";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";
import "@radix-ui/colors/gray-alpha.css";
import "@radix-ui/colors/gray-dark-alpha.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "./alert-dialog.css";

type AlertDialogProps = RxAlertDialog.AlertDialogProps;
type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;
type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps & {
  ref?: React.RefObject<HTMLDivElement>;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
};
type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps & {
  ref?: React.RefObject<HTMLHeadingElement>;
};
type AlertDialogDescriptionProps = RxAlertDialog.AlertDialogDescriptionProps & {
  ref?: React.RefObject<HTMLParagraphElement>;
};

export type {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps
};

const AlertDialogTrigger = RxAlertDialog.Trigger;

const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  ref,
  className,
  overlayClassName,
  overlayStyle,
  ...props
}) => {
  return (
    <RxAlertDialog.Portal>
      <RxAlertDialog.Overlay
        className={cn(
          "fixed inset-0 z-[9998]",
          "bg-[var(--gray-a9)] dark:bg-[var(--gray-a3)]",
          "alert-dialog-overlay",
          overlayClassName
        )}
        style={overlayStyle}
      />
      <RxAlertDialog.Content
        className={cn(
          "w-11/12 max-w-[500px] max-h-[90vh] p-6",
          "fixed top-1/2 left-1/2 z-[9999]",
          "transform -translate-x-1/2 -translate-y-1/2",
          "bg-[var(--slate-1)]",
          "rounded-md shadow-md",
          "outline dark:outline outline-[var(--gray-6)]",
          "alert-dialog-content",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxAlertDialog.Portal>
  );
};

const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Title
      className={cn(
        "text-xl font-semibold text-[var(--slate-12)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Description
      className={cn("mt-2", "text-[var(--slate-12)]", className)}
      ref={ref}
      {...props}
    />
  );
};

const AlertDialogCancel = RxAlertDialog.Cancel;
const AlertDialogAction = RxAlertDialog.Action;

type AlertDialogT = typeof RxAlertDialog.Root & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

const AlertDialog = RxAlertDialog.Root as AlertDialogT;

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

AlertDialog.displayName = "AlertDialog";
AlertDialog.Trigger.displayName = "AlertDialogTrigger";
AlertDialog.Content.displayName = "AlertDialogContent";
AlertDialog.Title.displayName = "AlertDialogTitle";
AlertDialog.Description.displayName = "AlertDialogDescription";
AlertDialog.Cancel.displayName = "AlertDialogCancel";
AlertDialog.Action.displayName = "AlertDialogAction";

export { AlertDialog };
