import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { RadioGroupDemo } from "@examples/radio-group";

import code from "@examples/radio-group?raw";

const usage = `<RadioGroup>
  <RadioGroup.Item value="..." />
</RadioGroup>`;

const RadioGroupPage = () => {
  return (
    <div className="flex">
      <div className="lg:w-1/2 w-full">
        <Heading as="h1" id="radio-group">
          Radio Group
        </Heading>
        <p className="mt-4 text-lg   rounded">
          A set of checkable buttons—known as radio buttons—where no more than
          one of the buttons can be checked at a time.
        </p>

        <PreviewTabs demo={<RadioGroupDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg   rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-radio-group", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg   rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/radio-group/radio-group.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/radio-group/radio-group.css"
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

        <FooterButtons labels={["Popover", "Scroll Area"]} />
      </div>
    </div>
  );
};

export { RadioGroupPage };
