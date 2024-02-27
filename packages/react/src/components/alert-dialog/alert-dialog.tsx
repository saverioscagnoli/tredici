import { cn } from "@lib";
import * as RxAlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

import "./alert-dialog.css";

interface AlertDialogComponent extends React.FC<AlertDialogProps> {
  Trigger: typeof DialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
}

type AlertDialogProps = RxAlertDialog.AlertDialogProps;

const AlertDialog = RxAlertDialog.AlertDialog as AlertDialogComponent;

type AlertDialogTriggerProps = RxAlertDialog.AlertDialogTriggerProps;

const DialogTrigger = RxAlertDialog.AlertDialogTrigger;

type AlertDialogContentProps = RxAlertDialog.AlertDialogContentProps;

const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAlertDialog.Portal>
        <RxAlertDialog.Overlay
          className={cn("bg-gray-950/20 fixed inset-0", "alert-dialog-overlay")}
        />
        <RxAlertDialog.Content
          className={cn(
            "w-[90vw] max-w-[450px] max-h-[85vh] p-4 fixed",
            "bg-white text-black",
            "dark:bg-[#18181b] dark:text-white",
            "border border-gray-600/20 rounded-md shadow-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "focus:outline-none",
            "alert-dialog-content",
            className
          )}
          {...props}
          ref={ref}
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
        className={cn("text-2xl font-bold break-words", className)}
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
      className={cn("mt-4 leading-5 font-semibold", className)}
      {...props}
      ref={ref}
    />
  );
});

type AlertDialogCancelProps = RxAlertDialog.AlertDialogCancelProps;

const AlertDialogCancel = RxAlertDialog.AlertDialogCancel;

type AlertDialogActionProps = RxAlertDialog.AlertDialogActionProps;

const AlertDialogAction = RxAlertDialog.AlertDialogAction;

AlertDialog.Trigger = DialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

AlertDialog.displayName = "AlertDialog";

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
