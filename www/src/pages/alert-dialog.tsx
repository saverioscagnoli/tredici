import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { AlertDialogDemo } from "@examples/alert-dialog";

import code from "@examples/alert-dialog?raw";
import { componentCssUrl, componentUrl } from "@lib";

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
  return (
    <Toc>
      <Heading as="h1" id="alert-dialog">
        Alert Dialog
      </Heading>

      <p className="mt-4 text-lg   rounded">
        The alert dialog is a modal that is used to display a message to the
        user.
        <br />
        It requires the user to interact with it before they can continue.
      </p>

      <PreviewTabs demo={<AlertDialogDemo />} demoCode={code} />

      <Heading as="h2" id="alert-dialog-props" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-alert-dialog", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`alert-dialog`}
        cssUrl={componentCssUrl`alert-dialog`}
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

      <FooterButtons labels={["Dark Theme", "Aspect Ratio"]} />
    </Toc>
  );
};

export { AlertDialogPage };
