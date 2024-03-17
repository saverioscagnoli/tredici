import {
  CodeBlock,
  CodeTabs,
  Heading,
  ModuleInstallTabs,
  PreviewRect
} from "@components";
import { AlertDialogDemo } from "@examples";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button, Tabs } from "@tredici";

import code from "components/examples/alert-dialog?raw";
import { Link } from "react-router-dom";

const usage = `<AlertDialog>
  <AlertDialog.Trigger />
  <AlertDialog.Content>
    <AlertDialog.Title />
    <AlertDialog.Description />
    <AlertDialog.Cancel />
    <AlertDialog.Action />
  </AlertDialog.Content>
</AlertDialog>`;

const AlertDialogPage = () => {
  useScrollToHash();

  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="alert-dialog">
          Alert Dialog
        </Heading>

        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          The alert dialog is a modal that is used to display a message to the
          user.
          <br />
          It requires the user to interact with it before they can continue.
        </p>

        <Tabs defaultValue="preview" className="mt-12" variant="flushed">
          <Tabs.List>
            <Tabs.Trigger value="preview" className="px-12">
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger value="code" className="px-12">
              Code
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="preview">
            <PreviewRect>
              <AlertDialogDemo />
            </PreviewRect>
          </Tabs.Content>
          <Tabs.Content value="code">
            <CodeBlock code={code} language="typescript" />
          </Tabs.Content>
        </Tabs>

        <Heading as="h2" id="alert-dialog-props" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>
        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-alert-dialog", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.css"
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
          <Link to="/docs/getting-started">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Getting Started
            </Button>
          </Link>
          <Link to="/docs/aspect-ratio">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Aspect Ratio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AlertDialogPage };
