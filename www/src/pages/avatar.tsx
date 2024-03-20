import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { AvatarDemo } from "@examples/avatar";
import { useScrollToHash } from "@hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

import code from "@examples/avatar?raw";

const usage = `<Avatar>
  <Avatar.Image />
  <Avatar.Fallback />
</Avatar>`;

const AvatarPage = () => {
  useScrollToHash();

  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="avatar">
          Avatar
        </Heading>
        <p className="mt-4 text-lg   rounded">
          The Avatar component is used to display a user's profile picture or
          letter of their name.
        </p>

        <PreviewTabs demo={<AvatarDemo />} demoCode={code} />

        <Heading as="h2" id="alert-dialog-props" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg   rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/avatar", "@radix-ui/react-icons"]}
        />

        <p className="mt-8 text-lg   rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/avatar/avatar.tsx"
          className="mt-8 "
        />

        <Heading as="h2" id="usage" className="mt-8">
          Usage
        </Heading>

        <CodeBlock
          code={usage}
          language="typescript"
          copyButton={false}
          className="mt-4"
        />

        <FooterButtons labels={["Aspect Ratio", "Button"]} />
      </div>
    </div>
  );
};

export { AvatarPage };
