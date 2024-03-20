import { Button, Tooltip } from "@tredici";

const TooltipDemo = () => {
  return (
    <Tooltip delayDuration={0}>
      <Tooltip.Trigger asChild>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        Here's Johnny! 🪓
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};

export { TooltipDemo };
