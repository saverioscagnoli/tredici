import {
  CodeBlock,
  CodeTabs,
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
      <div className="w-1/2">
        <Heading as="h1" id="dialog">
          Dialog
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>

        <PreviewTabs demo={<DialogDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-dialog", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
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

        <div className="mt-8 flex justify-between">
          <Link to="/docs/context-menu">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Context Menu
            </Button>
          </Link>
          <Link to="/docs/dropdown-menu">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Dropdown Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { DialogPage };