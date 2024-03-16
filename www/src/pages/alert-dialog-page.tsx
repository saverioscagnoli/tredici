import { Heading, Preview } from "@components";

const AlertDialogPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1">Alert Dialog</Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          The alert dialog is a modal that is used to display a message to the
          user.
          <br />
          It requires the user to interact with it before they can continue.
        </p>
        <Preview
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.css"
        />
      </div>
    </div>
  );
};

export { AlertDialogPage };
