import { Heading } from "@components";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GitHubLogoIcon
} from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] mt-16 flex flex-col gap-4 justify-center items-center px-20 pb-32">
      <Heading as="h1" className="text-5xl font-bold text-center">
        Build amazing components
      </Heading>
      <Heading as="h2" className="text-[--slate-11] text-center">
        Accessible and customizable components for your next project.
      </Heading>
      <div className="flex justify-center gap-12">
        <Link to="/docs">
          <Button size="lg" rightIcon={<ArrowRightIcon />}>
            Get Started
          </Button>
        </Link>
        <a href="https://github.com/saverioscagnoli/tredici" target="_blank">
          <Button size="lg" colorScheme="b/w" leftIcon={<GitHubLogoIcon />}>
            GitHub
          </Button>
        </a>
      </div>
    </div>
  );
};

export { HomePage };
