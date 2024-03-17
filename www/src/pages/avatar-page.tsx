import {  Heading, } from "@components";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import {  Button } from "@tredici";
import { Link } from "react-router-dom";

const AvatarPage = () => {
  useScrollToHash();



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
