import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "@lib";
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
            "z-[9998]",
            "bg-[--gray-a11]",
            "fixed inset-0",
            "alert-dialog-overlay"
          )}
        />
        <RxAlertDialog.Content
          className={cn(
            "z-[9999]",
            "w-11/12 max-w-[500px] max-h-[85vh]",
            "p-5",
            "rounded-md",
            "shadow-lg",
            "bg-[--slate-1]",
            "text-[--slate-12]",
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
};
