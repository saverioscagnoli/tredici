import React, { forwardRef } from "react";
import * as RxDialog from "@radix-ui/react-dialog";
import "./dialog.css";
import { cn } from "../../lib";

interface DialogComponent extends React.FC<RxDialog.DialogProps> {
  Trigger: typeof DialogTrigger;
  Content: typeof DialogContent;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Close: typeof DialogClose;
}

const Dialog: DialogComponent = props => {
  return <RxDialog.Root {...props} />;
};

export type DialogTriggerProps = RxDialog.DialogTriggerProps;

const DialogTrigger = forwardRef<HTMLButtonElement, DialogTriggerProps>(
  (props, ref) => {
    return <RxDialog.Trigger {...props} ref={ref} />;
  }
);

export type DialogContentProps = RxDialog.DialogContentProps;

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDialog.Portal>
        <RxDialog.Overlay className="dialog-13-overlay bg-black/50 fixed" />
        <RxDialog.Content
          {...props}
          ref={ref}
          className={cn(
            "w-[90vw] max-w-[500px] dark:bg-18181b bg-fafafa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed border border-gray-600/20 shadow rounded-md p-4",
            "dialog-13-body",
            className
          )}
        />
      </RxDialog.Portal>
    );
  }
);

export type DialogTitleProps = RxDialog.DialogTitleProps;

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDialog.Title
        {...props}
        ref={ref}
        className={cn("text-2xl font-extrabold break-words", className)}
      />
    );
  }
);

export type DialogDescriptionProps = RxDialog.DialogDescriptionProps;

const DialogDescription = forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDialog.Description
        {...props}
        ref={ref}
        className={cn("w-full text-md mt-2 break-words", className)}
      />
    );
  }
);

export type DialogCloseProps = RxDialog.DialogCloseProps;

const DialogClose = forwardRef<HTMLButtonElement, DialogCloseProps>(
  (props, ref) => {
    return <RxDialog.Close {...props} ref={ref} />;
  }
);

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Close = DialogClose;

export { Dialog };
