import { Heading, Preview } from "@components";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { AspectRatio, Button } from "@tredici";
import { Link } from "react-router-dom";

const AspectRatioPage = () => {
  useScrollToHash();

  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="aspect-ratio">
          Aspect Ratio
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          Used to display content in a specific aspect ratio.
        </p>

        <Preview
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/aspect-ratio/aspect-ratio.tsx"
          previewLength={3}
        >
          <div className="w-[275px]">
            <AspectRatio ratio={16 / 9}>
              <img src="/raccoons.jpg" className="rounded" />
            </AspectRatio>
          </div>
        </Preview>

        <div className="flex justify-between mt-8">
          <Link to="/docs/alert-dialog">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Alert Dialog
            </Button>
          </Link>
          <Link to="/docs/avatar">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Aspect Ratio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AspectRatioPage };
