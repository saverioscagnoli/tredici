import React from "react";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "~/utils";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";
import "@radix-ui/colors/gray-alpha.css";
import "@radix-ui/colors/gray-dark-alpha.css";

// ALERT DIALOG TRIGGER
type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;

const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = props => {
  return <RxAlertDialog.AlertDialogTrigger {...props} />;
};

export type { AlertDialogTriggerProps };

// ALERT DIALOG CONTENT

type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps & {
  ref?: React.RefObject<HTMLDivElement>;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
};

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
          "fixed inset-0",
          "bg-[var(--gray-a9)] dark:bg-[var(--gray-a5)]",
          overlayClassName
        )}
        style={overlayStyle}
      />
      <RxAlertDialog.Content
        className={cn(
          "w-[90vw] max-w-[500px] max-h-[90vh] p-6",
          "fixed top-[50%] left-[50%]",
          "translate-[-50%]",
          "bg-[var(--slate-1)]",
          "rounded-md shadow-md",
          "outline dark:outline-2 outline-[var(--gray-6)]",
          // Focus styles
          "focus:outline-none",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxAlertDialog.Portal>
  );
};

export type { AlertDialogContentProps };

// ALERT DIALOG TITLE

type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps & {
  ref?: React.RefObject<HTMLHeadingElement>;
};

const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Title
      className={cn(
        "m-0",
        "text-xl font-semibold text-[var(--slate-12)]",
        className
      )}
      {...props}
      ref={ref}
    />
  );
};

export type { AlertDialogTitleProps };

// ALERT DIALOG DESCRIPTION

type AlertDialogDescriptionProps = RxAlertDialog.AlertDialogDescriptionProps & {
  ref?: React.RefObject<HTMLParagraphElement>;
};

const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Description
      className={cn("mt-2", "text-[var(--slate-12)]", className)}
      {...props}
      ref={ref}
    />
  );
};

export type { AlertDialogDescriptionProps };

// ALERT DIALOG CANCEL
// Used to cancel the action that triggered the dialog

type AlertDialogCancelProps = RxAlertDialog.AlertDialogCancelProps;

const AlertDialogCancel = RxAlertDialog.AlertDialogCancel;

export type { AlertDialogCancelProps };

// ALERT DIALOG ACTION
// Used to confirm the action that triggered the dialog

type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps;

const AlertDialogAction = RxAlertDialog.AlertDialogAction;

export type { AlertDialogActionProps };

type AlertDialogComponent = typeof RxAlertDialog.Root & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

const AlertDialog = RxAlertDialog.Root as AlertDialogComponent;

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
AlertDialog.displayName = "AlertDialog";

export { AlertDialog };
