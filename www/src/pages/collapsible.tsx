import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { CollapsibleDemo } from "@examples/collapsible";

import code from "@examples/collapsible?raw";
import { componentCssUrl, componentUrl } from "@lib";

const usage = `
<Collapsible>
  <Collapsible.Trigger />
  <Collapsible.Content />
</Collapsible>`;

const CollapsiblePage = () => {
  return (
    <Toc>
      <Heading as="h1" id="collapsible">
        Collapsible
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Used to display and/or hide content.
      </p>

      <PreviewTabs demo={<CollapsibleDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-collapsible"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`collapsible`}
        cssUrl={componentCssUrl`collapsible`}
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

      <FooterButtons labels={["Checkbox", "Context Menu"]} />
    </Toc>
  );
};

export { CollapsiblePage };
