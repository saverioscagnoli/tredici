import { Heading } from "@components";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="flex">
      <div className="lg:w-1/2 w-full">
        <Heading as="h1">Introduction</Heading>
        <p className="mt-4 text-lg   rounded">
          Tredici is a collection of components, hooks, and utilities that I use
          across my projects. It's a way for me to consolidate all of my
          utilities into a single pack and share them with others.
          <br />
          <br />
          This takes a similar approach as the amazing <a>shadcn/ui</a>, so it's
          not intetded to be a component libray nor an npm package, but just a
          collection of copy-pastable components.
          <br />
          They can be used as you please, and you can modify them to fit your
          needs.
        </p>
        <Heading as="h2" className="mt-8">
          How it's made?
        </Heading>
        <p className="mt-4 text-lg   rounded">
          This project was made possible by <a>Radix-ui</a>, because I used
          their amazing unstyled primitives, which are easy to use and
          accessible. It's also powered by <a>Tailwind CSS</a>.
        </p>

        <div className="flex justify-end mt-8">
          <Link to="/docs/getting-started">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Getting Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Introduction };
