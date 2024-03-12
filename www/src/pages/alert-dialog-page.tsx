import { PreviewCodeTabs } from "@components";
import { AlertDialog, Button } from "@tredici";

const AlertDialogPage = () => {
  return (
    <div className="flex flex-col">
      <div className="p-4 px-24">
        <h1 className="text-3xl font-semibold mt-12">Alert Dialog</h1>

        <p className="text-xl mt-1">
          A modal dialog that prompts user to take an action. It's a good way to
          get user's attention and ask for confirmation.
        </p>
        <PreviewCodeTabs className="mt-8">
          <AlertDialog>
            <AlertDialog.Trigger>
              <Button>Open Dialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Discard draft?</AlertDialog.Title>
              <AlertDialog.Description>
                Are you sure? You will lose all of your changes. <br /> Be
                careful! This action cannot be undone.
              </AlertDialog.Description>
              <div className="w-full flex justify-end gap-4 mt-4">
                <AlertDialog.Cancel asChild>
                  <Button variant="secondary" colorScheme="b/w">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button colorScheme="red">Discard</Button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog>
        </PreviewCodeTabs>
      </div>
    </div>
  );
};

export { AlertDialogPage };
