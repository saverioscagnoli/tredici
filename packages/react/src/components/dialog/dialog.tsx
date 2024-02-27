import { cn } from "@lib";
import * as RxDialog from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

import "./dialog.css";

interface DialogComponent extends React.FC<DialogProps> {
  Trigger: typeof RxDialog.DialogTrigger;
  Content: typeof DialogContent;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Close: typeof DialogClose;
}

type DialogProps = RxDialog.DialogProps;

const Dialog = RxDialog.Dialog as DialogComponent;

type DialogTriggerProps = RxDialog.DialogTriggerProps;

const DialogTrigger = RxDialog.DialogTrigger;

type DialogContentProps = RxDialog.DialogContentProps;

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDialog.Portal>
        <RxDialog.Overlay
          className={cn("bg-gray-950/20 fixed inset-0", "dialog-overlay")}
        />
        <RxDialog.Content
          className={cn(
            "w-[90vw] max-w-[450px] max-h-[85vh] p-4 fixed",
            "bg-white text-black",
            "dark:bg-[#18181b] dark:text-white",
            "border border-gray-600/20 rounded-md shadow-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "focus:outline-none",
            "dialog-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxDialog.Portal>
    );
  }
);

type DialogTitleProps = RxDialog.DialogTitleProps;

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDialog.Title
        className={cn("text-2xl font-bold break-words", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type DialogDescriptionProps = RxDialog.DialogDescriptionProps;

const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <RxDialog.Description
        className={cn("mt-4 leading-5 font-semibold", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type DialogCloseProps = RxDialog.DialogCloseProps;

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ children, className, asChild = true, ...props }, ref) => {
    if (children) {
      return (
        <RxDialog.Close
          children={children}
          className={className}
          asChild={asChild}
          {...props}
        />
      );
    } else {
      return (
        <RxDialog.Close
          className={cn("absolute top-3 right-3", className)}
          {...props}
          ref={ref}
        >
          <Cross1Icon width={15} height={15} />
        </RxDialog.Close>
      );
    }
  }
);

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Close = DialogClose;

Dialog.displayName = "Dialog";

export { Dialog };
export type {
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps
};
