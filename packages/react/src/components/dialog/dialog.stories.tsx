import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";
import { ThemeButton } from "components/examples";
import { Button, Tredici } from "@components";
import { useEffect, useState } from "react";
import audioSrc from "./kq.mp3";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
      const kq = new Audio(audioSrc);

      kq.volume = 0.5;

      kq.onplay = () => setPlaying(true);
      kq.onended = () => {
        setPlaying(false);
        setDialogOpen(false);
      };

      setAudio(kq);
    }, []);

    const onPlay = () => {
      if (audio && !playing) audio.play();
    };

    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Dialog.Trigger asChild className="self-start">
              <Button>Open dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Did you know?</Dialog.Title>
              <Dialog.Description>
                My name is Kira Yoshikage and I'm 33 years old. My house is in
                the northeast section of Morioh, where all the villas are, and I
                am not married. I work as an employee for the Kame Yu department
                stores, and I get home every day by 8 PM at the latest. I don't
                smoke, but I occasionally drink.
              </Dialog.Description>
              <div className="flex justify-end gap-2 mt-3">
                <Dialog.Close asChild disabled={playing}>
                  <Button colorScheme="b/w" variant="ghost">
                    No, thanks
                  </Button>
                </Dialog.Close>
                <Button onClick={onPlay}>Wow! 👋</Button>
              </div>
              <Dialog.Close disabled={playing} />
            </Dialog.Content>
          </Dialog>
        </div>
      </Tredici>
    );
  }
};
