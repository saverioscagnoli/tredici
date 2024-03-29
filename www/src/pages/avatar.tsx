import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { AvatarDemo } from "@examples/avatar";

import code from "@examples/avatar?raw";
import { componentUrl } from "@lib";

const usage = `<Avatar>
  <Avatar.Image />
  <Avatar.Fallback />
</Avatar>`;

const AvatarPage = () => {
  return (
    <Toc>
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

      <CodeTabs componentUrl={componentUrl`avatar`} className="mt-8 " />

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
    </Toc>
  );
};

export { AvatarPage };
