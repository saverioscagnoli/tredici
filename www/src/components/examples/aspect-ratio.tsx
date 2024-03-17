import { AspectRatio } from "@tredici";

const AspectRatioDemo = () => {
  return (
    <div className="w-[275px]">
      <AspectRatio ratio={16 / 9}>
        <img src="/raccoons.jpg" className="rounded" />
      </AspectRatio>
    </div>
  );
};

export { AspectRatioDemo };
