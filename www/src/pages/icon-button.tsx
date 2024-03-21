import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { IconButtonDemo } from "@examples/icon-button";
import { ExitIcon, GitHubLogoIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@tredici";

import code from "@examples/icon-button?raw";
import { componentUrl } from "@lib";

const usage = `<IconButton icon={...} />`;

const IconButtonPage = () => {
  return (
    <Toc>
      {" "}
      <Heading as="h1" id="icon-button">
        Icon Button
      </Heading>
      <p className="mt-4 text-lg   rounded">
        The Button component is used to trigger an action or event.
      </p>
      <PreviewTabs demo={<IconButtonDemo />} demoCode={code} />
      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>
      <ModuleInstallTabs className="mt-4" packages={["@radix-ui/colors"]} />
      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>
      <CodeTabs
        componentUrl={componentUrl`icon-button`}
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
      <Heading as="h2" id="examples" className="mt-8">
        Examples
      </Heading>
      <Heading as="h3" id="Solid" className="mt-8">
        Solid
      </Heading>
      <PreviewTabs
        demo={
          <IconButton variant="solid" icon={<ExitIcon />}>
            Solid
          </IconButton>
        }
        demoCode='<IconButton variant="solid" icon={<ExitIcon />}>Solid</IconButton>'
        className="mt-4"
      />
      <Heading as="h3" id="outline" className="mt-8">
        Outline
      </Heading>
      <PreviewTabs
        demo={
          <IconButton variant="outline" icon={<SunIcon />}>
            Outline
          </IconButton>
        }
        demoCode='<IconButton variant="outline" icon={<SunIcon />}>Outline</IconButton>'
        className="mt-4"
      />
      <Heading as="h3" id="ghost" className="mt-8">
        Ghost
      </Heading>
      <PreviewTabs
        demo={
          <IconButton variant="ghost" icon={<GitHubLogoIcon />}>
            Ghost
          </IconButton>
        }
        demoCode='<IconButton variant="ghost" icon={<GitHubLogoIcon />}>Ghost</IconButton>'
        className="mt-4"
      />
      <FooterButtons labels={["Dropdown Menu", "Input"]} />
    </Toc>
  );
};

export { IconButtonPage };
