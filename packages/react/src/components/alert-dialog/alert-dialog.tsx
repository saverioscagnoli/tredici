import React, { forwardRef } from "react";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib";
import { Button, ButtonComponent, ButtonProps } from "../button";
import "./alert-dialog.css";

interface AlertDialogComponent
  extends React.FC<RxAlertDialog.AlertDialogProps> {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
}

const AlertDialog: AlertDialogComponent = props => {
  return <RxAlertDialog.Root {...props} />;
};

const AlertDialogTrigger = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Trigger asChild>
        <Button {...props} ref={ref} />
      </RxAlertDialog.Trigger>
    );
  }
) as ButtonComponent;

AlertDialogTrigger.Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Trigger asChild>
        <Button.Icon {...props} ref={ref} />
      </RxAlertDialog.Trigger>
    );
  }
);

export type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps;

const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ children, className, ...props }, ref) => {
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
        >
          {children}
        </RxAlertDialog.Content>
      </RxAlertDialog.Portal>
    );
  }
);

export type AlertDialogTitleProps = RxAlertDialog.AlertDialogTitleProps;

const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxAlertDialog.Title
        {...props}
        ref={ref}
        className={cn("text-2xl font-bold break-words", className)}
      >
        {children}
      </RxAlertDialog.Title>
    );
  }
);

export type AlertDialogCancelProps = RxAlertDialog.AlertDialogCancelProps;

const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Cancel asChild>
        <Button {...props} ref={ref} />
      </RxAlertDialog.Cancel>
    );
  }
) as ButtonComponent;

AlertDialogCancel.Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Cancel asChild>
        <Button.Icon {...props} ref={ref} />
      </RxAlertDialog.Cancel>
    );
  }
);

export type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps;

const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Action asChild>
        <Button {...props} ref={ref} />
      </RxAlertDialog.Action>
    );
  }
) as ButtonComponent;

AlertDialogAction.Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxAlertDialog.Action asChild>
        <Button.Icon {...props} ref={ref} />
      </RxAlertDialog.Action>
    );
  }
);

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

export { AlertDialog };
