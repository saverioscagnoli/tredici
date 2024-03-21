import {
  ColorSchemeSelect,
  Heading,
  CodeTabs,
  PreviewRect,
  SizeRadio,
  PreviewTabs,
  ModuleInstallTabs,
  CodeBlock,
  FooterButtons,
  Toc
} from "@components";
import { ButtonDemo } from "@examples/button";
import { Button, Spinner } from "@tredici";

import code from "@examples/button?raw";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { componentUrl } from "@lib";

const usage = `<Button variant="..." />`;

const ButtonPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="button">
        Button
      </Heading>
      <p className="mt-4 text-lg  rounded">
        The Button component is used to trigger an action or event.
      </p>

      <PreviewTabs demo={<ButtonDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg  rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs className="mt-4" packages={["@radix-ui/colors"]} />

      <p className="mt-8 text-lg  rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs componentUrl={componentUrl`button`} className="mt-8 " />

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

      <Heading as="h3" id="solid" className="mt-8">
        Solid
      </Heading>

      <PreviewTabs
        demo={<Button variant="solid">Solid</Button>}
        demoCode='<Button variant="solid">Solid</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="secondary" className="mt-8">
        Secondary
      </Heading>

      <PreviewTabs
        demo={<Button variant="secondary">Secondary</Button>}
        demoCode='<Button variant="secondary">Secondary</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="outline" className="mt-8">
        Outline
      </Heading>

      <PreviewTabs
        demo={<Button variant="outline">Outline</Button>}
        demoCode='<Button variant="outline">Outline</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="ghost" className="mt-8">
        Ghost
      </Heading>

      <PreviewTabs
        demo={<Button variant="ghost">Ghost</Button>}
        demoCode='<Button variant="ghost">Ghost</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="link" className="mt-8">
        Link
      </Heading>

      <PreviewTabs
        demo={<Button variant="link">Link</Button>}
        demoCode='<Button variant="link">Link</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="with-icon" className="mt-8">
        With icon
      </Heading>

      <PreviewTabs
        demo={
          <Button colorScheme="b/w" leftIcon={<GitHubLogoIcon />}>
            Github
          </Button>
        }
        demoCode='<Button variant="solid" leftIcon={<GitHubLogoIcon />}>Solid</Button>'
        className="mt-4"
      />

      <Heading as="h3" id="with-spinner" className="mt-8">
        With spinner
      </Heading>

      <PreviewTabs
        demo={
          <Button variant="secondary" leftIcon={<Spinner />}>
            Loading...
          </Button>
        }
        demoCode={`<Button variant="secondary" leftIcon={<Spinner />}>Loading...</Button>`}
      />

      <FooterButtons labels={["Avatar", "Checkbox"]} />
    </Toc>
  );
};

export { ButtonPage };
