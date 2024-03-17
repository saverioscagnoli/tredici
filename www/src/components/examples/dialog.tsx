import { Button, Dialog } from "@tredici";

const DialogDemo = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Need a will?</Dialog.Title>
        <Dialog.Description>Call McGill!</Dialog.Description>
        <div className="flex justify-end gap-4 mt-4">
          <Dialog.Close asChild>
            <Button variant="secondary" colorScheme="b/w">
              No, Thanks
            </Button>
          </Dialog.Close>
          <Button variant="secondary" colorScheme="grass">
            Yes!
          </Button>
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog>
  );
};

export { DialogDemo };
