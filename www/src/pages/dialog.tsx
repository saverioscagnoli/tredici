import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { DialogDemo } from "@examples/dialog";

import code from "@examples/dialog?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<Dialog>
  <Dialog.Trigger />
  <Dialog.Content>
    <Dialog.Title />
    <Dialog.Description />
  </Dialog.Content>
</Dialog>`;

const DialogPage = () => {
  return (
    <div className="flex">
      <div className="lg:w-1/2 w-full">
        <Heading as="h1" id="dialog">
          Dialog
        </Heading>
        <p className="mt-4 text-lg   rounded">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>

        <PreviewTabs demo={<DialogDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg   rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-dialog", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg   rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/dialog/dialog.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/dialog/dialog.css"
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

        <FooterButtons labels={["Context Menu", "Dropdown Menu"]} />
      </div>
    </div>
  );
};

export { DialogPage };
