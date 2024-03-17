import {
  CodeBlock,
  CodeTabs,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { DropdownMenuDemo } from "@examples/dropdown-menu";

import code from "@examples/dropdown-menu?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<DropdownMenu>
  <DropdownMenu.Trigger />
  <DropdownMenu.Content>
    <DropdownMenu.Label />
    <DropdownMenu.Item />

    <DropdownMenu.CheckboxItem />

    <DropdownMenu.RadioGroup>
      <DropdownMenu.RadioItem value="..." />
    </DropdownMenu.RadioGroup>

    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger />
      <DropdownMenu.SubContent />
    </DropdownMenu.Sub>

    <DropdownMenu.Separator />
    <DropdownMenu.Arrow />
  </DropdownMenu.Content>
</DropdownMenu>`;

const DropdownMenuPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="dropdown-menu">
          Dropdown Menu
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          Displays a menu to the user—such as a set of actions or
          functions—triggered by a button.
        </p>

        <PreviewTabs demo={<DropdownMenuDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-dropdown-menu", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/dropdown-menu/dropdown-menu.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/dropdown-menu/dropdown-menu.css"
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

        <Heading as="h3" id="color-scheme" className="mt-8">
          Color scheme
        </Heading>

        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          You can define a color scheme for the dropdown menu, and you can pass
          it as a prop in different parts of it.
          <br /> For example, if you define it in the root, it will affect all
          items. Instead if you define it in a single item, it will override the
          general color scheme and only that item will have that color scheme
        </p>

        <PreviewTabs
          demo={
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button>Open Menu</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Back</DropdownMenu.Item>
                <DropdownMenu.Item>Forward</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item colorScheme="red">Exit</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          }
          demoCode={`<DropdownMenu>
              <DropdownMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-[--gray-7] flex justify-center items-center">
                Right click here...
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Back</DropdownMenu.Item>
                <DropdownMenu.Item>Forward</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item colorScheme="red">Exit</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>`}
          className="mt-4"
        />

        <div className="mt-8 flex justify-between">
          <Link to="/docs/dialog">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Dialog
            </Button>
          </Link>
          <Link to="/docs/icon-button">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Icon Button
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { DropdownMenuPage };
