import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { PopoverDemo } from "@examples/popover";

import code from "@examples/popover?raw";
import { componentCssUrl, componentUrl } from "@lib";

const usage = `<Popover>
  <Popover.Trigger />
  <Popover.Content />
  <Popover.Close />
  <Popover.Anchor />
  <Popover.Arrow />
</Popover>`;

const PopoverPage = () => {
  return (
    <Toc>
      {" "}
      <Heading as="h1" id="popover">
        Popover
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Displays rich content in a portal.
      </p>
      <PreviewTabs demo={<PopoverDemo />} demoCode={code} />
      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>
      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-popover"]}
      />
      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>
      <CodeTabs
        componentUrl={componentUrl`popover`}
        cssUrl={componentCssUrl`popover`}
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
      <FooterButtons labels={["Menubar", "Radio Group"]} />
    </Toc>
  );
};

export { PopoverPage };
