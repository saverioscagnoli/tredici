import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { ScrollAreaDemo } from "@examples/scroll-area";

import code from "@examples/scroll-area?raw";
import { componentUrl } from "@lib";

const usage = `<ScrollArea>
  {...}
  <ScrollArea.Scrollbar />
</ScrollArea>`;

const ScrollAreaPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="scroll-area">
        Scroll Area
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Augments native scroll functionality for custom, cross-browser styling.
      </p>

      <PreviewTabs demo={<ScrollAreaDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-scroll-area", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`scroll-area`}
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

      <FooterButtons labels={["Radio Group", "Select"]} />
    </Toc>
  );
};

export { ScrollAreaPage };
