import React, { forwardRef } from "react";
import * as RxDialog from "@radix-ui/react-dialog";
import "./dialog.css";
import { cn } from "../../lib";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../button";

interface DialogComponent extends React.FC<RxDialog.DialogProps> {
  Trigger: typeof DialogTrigger;
  Body: typeof DialogBody;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Close: typeof DialogClose;
}

const Dialog: DialogComponent = ({ children, ...props }) => {
  return <RxDialog.Root {...props}>{children}</RxDialog.Root>;
};

const DialogTrigger = forwardRef<
  HTMLButtonElement,
  RxDialog.DialogTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxDialog.Trigger {...props} ref={ref}>
      {children}
    </RxDialog.Trigger>
  );
});

const DialogBody = forwardRef<HTMLDivElement, RxDialog.DialogContentProps>(
  ({ children, className, ...props }, ref) => {
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
        >
          {children}
        </RxDialog.Content>
      </RxDialog.Portal>
    );
  }
);

const DialogTitle = forwardRef<HTMLHeadingElement, RxDialog.DialogTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxDialog.Title
        {...props}
        ref={ref}
        className={cn("text-2xl font-extrabold break-words", className)}
      >
        {children}
      </RxDialog.Title>
    );
  }
);

const DialogDescription = forwardRef<
  HTMLDivElement,
  RxDialog.DialogDescriptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxDialog.Description
      {...props}
      ref={ref}
      className={cn("w-full text-md mt-2 break-words", className)}
    >
      {children}
    </RxDialog.Description>
  );
});

const DialogClose = forwardRef<HTMLButtonElement, RxDialog.DialogCloseProps>(
  ({ children, ...props }, ref) => {
    return (
      <RxDialog.Close {...props} ref={ref}>
        {!children ? (
          <Button.Icon colorScheme="crimson" size="sm" icon={<Cross2Icon />} />
        ) : (
          children
        )}
      </RxDialog.Close>
    );
  }
);

Dialog.Trigger = DialogTrigger;
Dialog.Body = DialogBody;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Close = DialogClose;

export { Dialog };
