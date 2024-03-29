import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { InputDemo } from "@examples/input";

import code from "@examples/input?raw";
import { componentUrl } from "@lib";

const usage = `<Input colorScheme={...} />`;

const InputPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="button">
        Button
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Displays an input field for the user to enter data.
      </p>

      <PreviewTabs demo={<InputDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs className="mt-4" packages={["@radix-ui/colors"]} />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`input`}
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
    </Toc>
  );
};

export { InputPage };
