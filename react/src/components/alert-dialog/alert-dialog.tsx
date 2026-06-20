import React, { type RefObject } from "react";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "~/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";
import "@radix-ui/colors/gray-alpha.css";
import "@radix-ui/colors/gray-dark-alpha.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "./alert-dialog.css";

type AlertDialogProps = RxAlertDialog.AlertDialogProps;

export type { AlertDialogProps };

type AlertDialogComponent = typeof RxAlertDialog.Root & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

const AlertDialog = RxAlertDialog.Root as AlertDialogComponent;

type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;

export type { AlertDialogTriggerProps };

const AlertDialogTrigger = RxAlertDialog.Trigger;

type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps & {
  ref?: React.RefObject<HTMLDivElement>;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
};

export type { AlertDialogContentProps };

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
          "fixed inset-0 z-9998",
          "bg-(--gray-a9) dark:bg-(--gray-a3)",
          "alert-dialog-overlay",
          overlayClassName
        )}
        style={overlayStyle}
      />
      <RxAlertDialog.Content
        className={cn(
          "w-11/12 max-w-125 max-h-[90vh] p-6",
          "fixed top-1/2 left-1/2 z-9999",
          "transform -translate-x-1/2 -translate-y-1/2",
          "bg-(--slate-1)",
          "rounded-md shadow-md",
          "outline dark:outline outline-(--gray-7)",
          "alert-dialog-content",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxAlertDialog.Portal>
  );
};

type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps & {
  ref?: RefObject<HTMLHeadingElement>;
};

export type { AlertDialogTitleProps };

const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Title
      className={cn("text-xl font-semibold text-(--slate-12)", className)}
      ref={ref}
      {...props}
    />
  );
};

type AlertDialogDescriptionProps = RxAlertDialog.AlertDialogDescriptionProps & {
  ref?: RefObject<HTMLParagraphElement>;
};

export type { AlertDialogDescriptionProps };

const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  ref,
  className,
  ...props
}) => {
  return (
    <RxAlertDialog.Description
      className={cn("mt-2", "text-(--slate-12) font-normal", className)}
      ref={ref}
      {...props}
    />
  );
};

type AlertDialogCloseProps = RxAlertDialog.AlertDialogCancelProps & {
  ref?: RefObject<HTMLButtonElement>;
};

export type { AlertDialogCloseProps };

const AlertDialogCancel: React.FC<AlertDialogCloseProps> = ({
  className,
  children,
  ...props
}) => {
  if (children) {
    return (
      <RxAlertDialog.Cancel className={className} {...props}>
        {children}
      </RxAlertDialog.Cancel>
    );
  } else {
    return (
      <RxAlertDialog.Cancel
        className={cn(
          "w-7 h-7 absolute top-4 right-4",
          "inline-flex items-center justify-center",
          "rounded-md",
          "bg-transparent text-(--slate-12)",
          "hover:bg-(--gray-5) active:translate-y-px",
          "transition-all duration-100",
          className
        )}
      >
        <Cross1Icon />
      </RxAlertDialog.Cancel>
    );
  }
};

type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps & {
  ref?: RefObject<HTMLButtonElement>;
};

export type { AlertDialogActionProps };

const AlertDialogAction: React.FC<AlertDialogActionProps> = props => (
  <RxAlertDialog.Action {...props} />
);

AlertDialog.displayName = "AlertDialog";
AlertDialogTrigger.displayName = "AlertDialogTrigger";
AlertDialogContent.displayName = "AlertDialogContent";
AlertDialogTitle.displayName = "AlertDialogTitle";
AlertDialogDescription.displayName = "AlertDialogDescription";
AlertDialogCancel.displayName = "AlertDialogCancel";
AlertDialogAction.displayName = "AlertDialogAction";

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

export { AlertDialog };
