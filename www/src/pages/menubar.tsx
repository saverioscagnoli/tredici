import {
  CodeBlock,
  CodeTabs,
  Heading,
  ModuleInstallTabs,
  PreviewTabs
} from "@components";
import { MenubarDemo } from "@examples/menubar";

import code from "@examples/menubar?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<Menubar>
  <Menubar.Menu>
    <Menubar.Trigger />
    <Menubar.Content>
      <Menubar.Label />
      <Menubar.Item />

      <Menubar.CheckboxItem />

      <Menubar.RadioGroup>
        <Menubar.RadioItem value="..." />
      </Menubar.RadioGroup>

      <Menubar.Sub>
        <Menubar.SubTrigger />
        <Menubar.SubContent />
      </Menubar.Sub>

      <Menubar.Separator />
      <Menubar.Arrow />
    </Menubar.Content>
  </Menubar.Menu>
</Menubar>`;


const MenubarPage = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="menubar">
          Menubar
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          A visually persistent menu common in desktop applications that
          provides quick access to a consistent set of commands.{" "}
        </p>

        <PreviewTabs demo={<MenubarDemo />} demoCode={code} />

        <Heading as="h2" id="installation" className="mt-8">
          Installation
        </Heading>
        <p className="mt-2 text-lg backdrop-blur-sm rounded">
          First, install the required packages.
        </p>

        <ModuleInstallTabs
          className="mt-4"
          packages={["@radix-ui/react-menubar", "@radix-ui/colors"]}
        />

        <p className="mt-8 text-lg backdrop-blur-sm rounded">
          Then you can import the component files and use them in your app.
        </p>

        <CodeTabs
          componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/menubar/menubar.tsx"
          cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/menubar/menubar.css"
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

        <div className="mt-8 flex justify-between">
          <Link to="/docs/input">
            <Button
              variant="secondary"
              colorScheme="b/w"
              leftIcon={<ChevronLeftIcon />}
            >
              Input
            </Button>
          </Link>
          <Link to="/docs/popover">
            <Button
              variant="secondary"
              colorScheme="b/w"
              rightIcon={<ChevronRightIcon />}
            >
              Popover
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MenubarPage };
