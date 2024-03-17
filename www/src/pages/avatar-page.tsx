import { Heading, Preview } from "@components";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  AvatarColorScheme,
  AvatarSize,
  Button,
  RadioGroup,
  Select
} from "@tredici";
import { useState } from "react";
import { Link } from "react-router-dom";

const AvatarPage = () => {
  useScrollToHash();

  const [colorScheme, setColorScheme] = useState<AvatarColorScheme>("plum");
  const [size, setSize] = useState<AvatarSize>("md");

  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="avatar">
          Avatar
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          The Avatar component is used to display a user's profile picture or
          letter of their name.
        </p>

        <Preview
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/avatar/avatar.tsx"
          className="relative"
        >
          <div className="flex gap-4">
            <Avatar size={size}>
              <Avatar.Image src="/cat.jpg" />
            </Avatar>
            <Avatar size={size} colorScheme={colorScheme}>
              <Avatar.Fallback>SC</Avatar.Fallback>
            </Avatar>
            <Avatar size={size} colorScheme={colorScheme} />
          </div>
          <Select
            value={colorScheme}
            colorScheme={colorScheme}
            onValueChange={v => setColorScheme(v as AvatarColorScheme)}
          >
            <Select.Trigger className=" w-44 absolute left-4 top-4">
              <Select.Value placeholder="Color scheme..." />
            </Select.Trigger>
            <Select.Content className="z-10">
              {[
                "plum",
                "teal",
                "grass",
                "red",
                "amber",
                "blue",
                "b/w",
                "gray"
              ].map(color => (
                <Select.Item key={color} value={color}>
                  {color}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>

          <RadioGroup
            value={size}
            colorScheme={colorScheme}
            onValueChange={v => setSize(v as AvatarSize)}
            defaultValue="md"
            className="flex flex-col gap-4 absolute left-4 top-16"
          >
            <div className="flex items-center gap-4">
              <RadioGroup.Item value="sm" id="sm" />
              <label htmlFor="sm">sm</label>
            </div>
            <div className="flex items-center gap-4" id="md">
              <RadioGroup.Item value="md" />
              <label htmlFor="md">md</label>
            </div>
            <div className="flex items-center gap-4" id="lg">
              <RadioGroup.Item value="lg" />
              <label htmlFor="lg">lg</label>
            </div>
            <div className="flex items-center gap-4" id="xl">
              <RadioGroup.Item value="xl" />
              <label htmlFor="xl">xl</label>
            </div>
          </RadioGroup>
        </Preview>

        <div className="flex justify-between mt-8">
          <Link to="/docs/aspect-ratio">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Aspect Ratio
            </Button>
          </Link>
          <Link to="/docs/button">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Button
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AvatarPage };
