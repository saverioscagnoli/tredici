import {
  CheckIcon,
  ClipboardCopyIcon,
} from "@radix-ui/react-icons";
import { IconButton, IconButtonProps, Tooltip } from "@tredici";
import React, { useEffect, useState } from "react";

type CopyButtonProps = IconButtonProps & {
  text: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ text, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setOpen(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <Tooltip open={open}>
      <Tooltip.Trigger asChild>
        <IconButton
          onClick={copy}
          colorScheme={open ? "grass" : "b/w"}
          variant="secondary"
          icon={open ? <CheckIcon /> : <ClipboardCopyIcon />}
          {...props}
        />
      </Tooltip.Trigger>
      <Tooltip.Content>
        Copied!
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};

export { CopyButton };
