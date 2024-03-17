import { RowSpacingIcon } from "@radix-ui/react-icons";
import { Collapsible, IconButton } from "@tredici";

const CollapsibleDemo = () => {
  return (
    <Collapsible>
      <div className="w-[230px] flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p>Meanwhile, in England...</p>
          <Collapsible.Trigger asChild>
            <IconButton icon={<RowSpacingIcon />} round />
          </Collapsible.Trigger>
        </div>
        <span className="h-9 px-2 flex items-center rounded border border-[--gray-7]">
          Who kissed my girlfriend?!
        </span>

        <Collapsible.Content className="flex flex-col gap-2">
          <span className="h-9 px-2 flex items-center rounded border border-[--gray-7]">
            It was me, Dio!
          </span>
          <span className="h-9 px-2 flex items-center rounded border border-[--gray-7]">
            It was me all along!
          </span>
        </Collapsible.Content>
      </div>
    </Collapsible>
  );
};

export { CollapsibleDemo };
