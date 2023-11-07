import React, { forwardRef } from "react";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib";

interface AlertDialogComponent
  extends React.FC<RxAlertDialog.AlertDialogProps> {
  Trigger: typeof AlertDialogTrigger;
  Body: typeof AlertDialogBody;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
}

const AlertDialog: AlertDialogComponent = ({ children, ...props }) => {
  return <RxAlertDialog.Root {...props}>{children}</RxAlertDialog.Root>;
};

const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  RxAlertDialog.AlertDialogTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxAlertDialog.Trigger {...props} ref={ref}>
      {children}
    </RxAlertDialog.Trigger>
  );
});

const AlertDialogBody = forwardRef<
  HTMLDivElement,
  RxAlertDialog.AlertDialogContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxAlertDialog.Portal>
      <RxAlertDialog.Overlay />
      <RxAlertDialog.Content
        {...props}
        ref={ref}
        className={cn(
          "w-[90vw] max-w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed border border-gray-600/20 shadow rounded-md p-4",
          className
        )}
      >
        {children}
      </RxAlertDialog.Content>
    </RxAlertDialog.Portal>
  );
});

const AlertDialogTitle = forwardRef<
  HTMLHeadingElement,
  RxAlertDialog.AlertDialogTitleProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxAlertDialog.Title
      {...props}
      ref={ref}
      className={cn("text-2xl font-extrabold", className)}
    >
      {children}
    </RxAlertDialog.Title>
  );
});

const AlertDialogDescription = forwardRef<
  HTMLParagraphElement,
  RxAlertDialog.AlertDialogDescriptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxAlertDialog.Description
      {...props}
      ref={ref}
      className={cn("text-md mt-2", className)}
    >
      {children}
    </RxAlertDialog.Description>
  );
});

const AlertDialogCancel = forwardRef<
  HTMLButtonElement,
  RxAlertDialog.AlertDialogCancelProps
>(({ children, ...props }, ref) => {
  return (
    <RxAlertDialog.Cancel {...props} ref={ref}>
      {children}
    </RxAlertDialog.Cancel>
  );
});

const AlertDialogAction = forwardRef<
  HTMLButtonElement,
  RxAlertDialog.AlertDialogActionProps
>(({ children, ...props }, ref) => {
  return (
    <RxAlertDialog.Action {...props} ref={ref}>
      {children}
    </RxAlertDialog.Action>
  );
});

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Body = AlertDialogBody;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

export { AlertDialog };
