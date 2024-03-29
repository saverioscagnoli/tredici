import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { CheckboxDemo } from "@examples/checkbox";

import code from "@examples/checkbox?raw";
import { componentUrl } from "@lib";

const usage = `<Checkbox />`;

const CheckboxPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="checkbox">
        Checkbox
      </Heading>
      <p className="mt-4 text-lg   rounded">
        The Checkbox component is used to select or deselect an option.
      </p>

      <PreviewTabs demo={<CheckboxDemo />} demoCode={code} />

      <Heading as="h2" id="alert-dialog-props" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={[
          "@radix-ui/react-checkbox",
          "@radix-ui/colors",
          "@radix-ui/react-icons"
        ]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`checkbox`}
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

      <FooterButtons labels={["Button", "Collapsible"]} />
    </Toc>
  );
};

export { CheckboxPage };
