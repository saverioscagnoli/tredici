import {
  CodeBlock,
  CodeTabs,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { AspectRatioDemo } from "@examples/aspect-ratio";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

import code from "@examples/aspect-ratio?raw";

const usage = `<AspectRatio>
  <img />
</AspectRatio>`;

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

        <PreviewTabs demo={<AspectRatioDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-aspect-ratio"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/aspect-ratio/aspect-ratio.tsx"
          className="mt-8 "
        />

        <Heading as="h2" id="usage" className="mt-8">
          Usage
        </Heading>

        <CodeBlock
          code={usage}
          language="typescript"
          copyButton={false}
          className="mt-4"
        />

        <div className="mt-8 flex justify-between">
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
              Avatar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AspectRatioPage };
