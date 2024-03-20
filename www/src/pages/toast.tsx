import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { ToastDemo } from "@examples/toast";

import code from "@examples/toast?raw";

const usage = `<Toast>
   {...}
  <Toast.Title />
  <Toast.Description />
  <Toast.Action altText="..." />
  <Toast.Close />
</Toast>`;

const ToastPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1">Toast</Heading>
        <p className="mt-4 text-lg   rounded">
          A succinct message that is displayed temporarily.
        </p>

        <PreviewTabs demo={<ToastDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>

        <p className="mt-2 text-lg   rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-toast"]}
        />

        <p className="mt-8 text-lg   rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/toast/toast.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/toast/toast.css"
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

        <FooterButtons labels={["Tabs", "Tooltip"]} />
      </div>
    </div>
  );
};

export { ToastPage };
