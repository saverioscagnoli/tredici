import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { SwitchDemo } from "@examples/switch";

import code from "@examples/switch?raw";
import { componentCssUrl, componentUrl } from "@lib";

const usage = `<Switch />`;

const SwitchPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="switch">
        Switch
      </Heading>
      <p className="mt-4 text-lg rounded">
        A control that allows the user to toggle between checked and not
        checked.
      </p>

      <PreviewTabs demo={<SwitchDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-switch", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs componentUrl={componentUrl`switch`} className="mt-8 " />

      <Heading as="h2" id="usage" className="mt-8">
        Usage
      </Heading>

      <CodeBlock
        code={usage}
        language="typescript"
        copyButton={false}
        className="mt-4"
      />

      <FooterButtons labels={["Spinner", "Tabs"]} />
    </Toc>
  );
};

export { SwitchPage };
