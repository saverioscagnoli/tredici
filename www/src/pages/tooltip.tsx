import {
  CodeBlock,
  CodeTabs,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { TooltipDemo } from "@examples/tooltip";
import code from "@examples/tooltip?raw";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<Tooltip>
  <Tooltip.Trigger />
  <Tooltip.Content>
    <Tooltip.Arrow />
  </Tooltip.Content>
</Tooltip>`;

const TooltipPage = () => {
  return (
    <Toc>
      <Heading as="h1">Tooltip</Heading>
      <p className="mt-4 text-lg   rounded">
        A popup that displays information related to an element when the element
        receives keyboard focus or the mouse hovers over it.
      </p>

      <PreviewTabs demo={<TooltipDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>

      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-tooltip", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/tooltip/tooltip.tsx"
        cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/tooltip/tooltip.css"
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

      <Link to="/docs/toast">
        <Button
          variant="secondary"
          colorScheme="b/w"
          className="mt-8"
          leftIcon={<ChevronLeftIcon />}
        >
          Toast
        </Button>
      </Link>
    </Toc>
  );
};

export { TooltipPage };
