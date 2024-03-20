import { Button, Toast } from "@tredici";
import { useRef, useState } from "react";

const ToastDemo = () => {
  const [open, setOpen] = useState<boolean>(false);

  const timerRef = useRef<number>();
  const eventDateRef = useRef<Date>();

  return (
    <div>
      <Toast open={open} onOpenChange={setOpen}>
        <Button
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = new Date(
                new Date().setDate(new Date().getDate() + 7)
              );
              setOpen(true);
            }, 100);
          }}
        >
          Add to calendar
        </Button>
        <Toast.Title>Event added to your calendar</Toast.Title>
        <Toast.Description>
          Scheduled for
          {new Intl.DateTimeFormat("it", {
            dateStyle: "full",
            timeStyle: "short"
          }).format(eventDateRef.current)}
          .
        </Toast.Description>
        <Toast.Action altText="close" className="mt-2 mr-2">
          <Button variant="secondary" colorScheme="red">
            Undo
          </Button>
        </Toast.Action>
        <Toast.Close />
      </Toast>
    </div>
  );
};

export { ToastDemo };
