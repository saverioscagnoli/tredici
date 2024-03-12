import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./toast";
import { Frame } from "@/components/fundamentals";
import { Button } from "../button";
import { useEffect, useRef, useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const eventDateRef = useRef(new Date());
    const timerRef = useRef(0);

    useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    return (
      <Frame full>
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
            Scheduled for{" "}
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
      </Frame>
    );
  }
};
