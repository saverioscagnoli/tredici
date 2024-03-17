import { Heading, Preview } from "@components";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button } from "@tredici";
import { Link } from "react-router-dom";

const AlertDialogPage = () => {
  useScrollToHash();

  const audio = new Audio("/bokudan.mp3");

  const play = () => {
    audio.play();
  };

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
        <Preview
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/alert-dialog/alert-dialog.css"
        >
          <AlertDialog>
            <AlertDialog.Trigger asChild>
              <Button>Open Dialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Yoshikage Kira</AlertDialog.Title>
              <AlertDialog.Description>
                Killer Queen has already touched the dialog!
              </AlertDialog.Description>
              <div className="flex justify-end gap-4 mt-4">
                <AlertDialog.Cancel asChild>
                  <Button variant="secondary" colorScheme="b/w">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button colorScheme="red" onClick={play}>
                    Confirm
                  </Button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog>
        </Preview>

        <div className="flex justify-between mt-8">
          <Link to="/docs/dark-theme">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Dark Theme
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
