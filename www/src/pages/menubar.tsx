import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
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
    <Toc>
      <Heading as="h1" id="menubar">
        Menubar
      </Heading>
      <p className="mt-4 text-lg   rounded">
        A visually persistent menu common in desktop applications that provides
        quick access to a consistent set of commands.{" "}
      </p>

      <PreviewTabs demo={<MenubarDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-menubar", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
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

      <FooterButtons labels={["Input", "Popover"]} />
    </Toc>
  );
};

export { MenubarPage };
