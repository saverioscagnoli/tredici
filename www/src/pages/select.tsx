import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { SelectDemo } from "@examples/select";

import code from "@examples/select?raw";
import { componentCssUrl, componentUrl } from "@lib";

const usage = `<Select>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Content>
    <Select.Label />
    <Select.Item />
    <Select.Group>
       <Select.Label />
       <Select.Item />
    </Select.Group>
    <Select.Separator />
  </Select.Content>
</Select>`;

const SelectPage = () => {
  return (
    <Toc>
      <Heading as="h1">Select</Heading>
      <p className="mt-4 text-lg   rounded">
        Displays a list of options for the user to pick from{" "}
      </p>

      <PreviewTabs demo={<SelectDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-select", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`select`}
        cssUrl={componentCssUrl`select`}
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

      <FooterButtons labels={["Scroll Area", "Slider"]} />
    </Toc>
  );
};

export { SelectPage };
