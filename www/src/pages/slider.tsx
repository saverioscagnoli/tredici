import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { SliderDemo } from "@examples/slider";

import code from "@examples/slider?raw";

const usage = `<Slider />`;

const SliderPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1">Slider</Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          An input where the user selects a value from within a given range.
        </p>

        <PreviewTabs demo={<SliderDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-slider", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/slider/slider.tsx"
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

        <FooterButtons labels={["Select", "Switch"]} />
      </div>
    </div>
  );
};

export { SliderPage };
