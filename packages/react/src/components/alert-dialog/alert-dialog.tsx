import React, { forwardRef } from "react";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib";
import "./alert-dialog.css";

export type AlertDialogProps = RxAlertDialog.AlertDialogProps;

interface AlertDialogComponent extends React.FC<AlertDialogProps> {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
}

const AlertDialog: AlertDialogComponent = props => {
  return <RxAlertDialog.Root {...props} />;
};

type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;

const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  AlertDialogTriggerProps
>((props, ref) => {
  return <RxAlertDialog.Trigger {...props} ref={ref} />;
});

export type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps;

const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAlertDialog.Portal>
        <RxAlertDialog.Overlay className="alert-dialog-13-overlay bg-black/50 fixed" />
        <RxAlertDialog.Content
          {...props}
          ref={ref}
          className={cn(
            "w-[90vw] max-w-[500px] dark:bg-18181b bg-fafafa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed border border-gray-600/20 shadow rounded-md p-4",
            "alert-dialog-13-body",
            className
          )}
        />
      </RxAlertDialog.Portal>
    );
  }
);

export type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps;

const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAlertDialog.Title
        {...props}
        ref={ref}
        className={cn("text-2xl font-bold break-words", className)}
      />
    );
  }
);

export type AlertDialogDescriptionProps =
  RxAlertDialog.AlertDialogDescriptionProps;

const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <RxAlertDialog.Description
      {...props}
      ref={ref}
      className={cn("text-md mt-2 break-words", className)}
    />
  );
});

export type AlertDialogCancelProps = RxAlertDialog.AlertDialogCancelProps;

const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  (props, ref) => {
    return <RxAlertDialog.Cancel {...props} ref={ref} />;
  }
);

export type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps;

const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  (props, ref) => {
    return <RxAlertDialog.Action {...props} ref={ref} />;
  }
);

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

export { AlertDialog };
