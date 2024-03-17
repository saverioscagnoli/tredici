import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { InputDemo } from "@examples/input";

import code from "@examples/input?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<Input colorScheme={...} />`;

const InputPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="button">
          Button
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          Displays an input field for the user to enter data.
        </p>

        <PreviewTabs demo={<InputDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs className="mt-4" packages={["@radix-ui/colors"]} />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/input/input.tsx"
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

        <FooterButtons labels={["Icon Button", "Menubar"]} />
      </div>
    </div>
  );
};

export { InputPage };
