import { AlertDialog as KbAlertDialog } from "@kobalte/core";
import { cn } from "@lib";

import "@radix-ui/colors/gray-alpha.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "./alert-dialog.css";

type AlertDialogComponent = typeof KbAlertDialog.Root & {
  Trigger: typeof AlertDialogTrigger;
  Content: typeof AlertDialogContent;
  Title: typeof AlertDialogTitle;
  Description: typeof AlertDialogDescription;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

type AlertDialogProps = KbAlertDialog.AlertDialogRootProps;

const AlertDialog = KbAlertDialog.Root as AlertDialogComponent;

type AlertDialogTriggerProps = KbAlertDialog.AlertDialogTriggerProps;

const AlertDialogTrigger = KbAlertDialog.Trigger;

type AlertDialogContentProps = KbAlertDialog.AlertDialogContentProps;

const AlertDialogContent = ({ ref, ...props }: AlertDialogContentProps) => {
  return (
    <KbAlertDialog.Portal>
      <KbAlertDialog.Overlay
        class={cn(
          "z-[9998]",
          "bg-[--gray-a11]",
          "fixed inset-0",
          "alert-dialog-overlay",
          props.class
        )}
      />
      <KbAlertDialog.Content
        class={cn(
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
          props.class
        )}
        ref={ref}
        {...props}
      />
    </KbAlertDialog.Portal>
  );
};

type AlertDialogTitleProps = KbAlertDialog.AlertDialogTitleProps;

const AlertDialogTitle = ({ ref, ...props }: AlertDialogTitleProps) => {
  return (
    <KbAlertDialog.Title
      class={cn("text-xl font-bold", props.class)}
      {...props}
      ref={ref}
    />
  );
};

type AlertDialogDescriptionProps = KbAlertDialog.AlertDialogDescriptionProps;

const AlertDialogDescription = ({
  ref,
  ...props
}: AlertDialogDescriptionProps) => {
  return (
    <KbAlertDialog.Description
      class={cn("mt-2", props.class)}
      {...props}
      ref={ref}
    />
  );
};

type AlertDialogCancelProps = KbAlertDialog.AlertDialogCloseButtonProps;

const AlertDialogCancel = KbAlertDialog.CloseButton;

type AlertDialogActionProps = KbAlertDialog.AlertDialogCloseButtonProps;

const AlertDialogAction = KbAlertDialog.CloseButton;

AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

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
