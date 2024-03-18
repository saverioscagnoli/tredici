import { ArrowDownIcon } from "@radix-ui/react-icons";
import { IconButton, Input, Popover } from "@tredici";

const PopoverDemo = () => {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <IconButton round icon={<ArrowDownIcon />} />
      </Popover.Trigger>
      <Popover.Content className="w-52 flex flex-col gap-2 p-4">
        <Popover.Arrow />
        <Popover.Close />
        <div className="w-full h-full flex justify-between">
          <p className="font-semibold">Canvas size</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm w-20">Width</p>
          <Input spellCheck={false} defaultValue="130px" size="sm" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-sm w-20">Height</p>
          <Input spellCheck={false} defaultValue="240px" size="sm" />
        </div>
      </Popover.Content>
    </Popover>
  );
};

export { PopoverDemo };
