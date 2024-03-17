import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { CheckboxDemo } from "@examples/checkbox";

import code from "@examples/checkbox?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<Checkbox />`;

const CheckboxPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="checkbox">
          Checkbox
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          The Checkbox component is used to select or deselect an option.
        </p>

        <PreviewTabs demo={<CheckboxDemo />} demoCode={code} />

        <Heading as="h2" id="alert-dialog-props" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
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

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/checkbox/checkbox.tsx"
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
      </div>
    </div>
  );
};

export { CheckboxPage };
