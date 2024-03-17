import { AlertDialog, Button } from "@tredici";

const AlertDialogDemo = () => {
  const audio = new Audio("/bokudan.mp3");

  const play = () => {
    audio.play();
  };

  return (
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
  );
};

export { AlertDialogDemo };
