import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { ContextMenuDemo } from "@examples/context-menu";

import code from "@examples/context-menu?raw";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button, ContextMenu } from "@tredici";
import { Link } from "react-router-dom";

const usage = `<ContextMenu>
  <ContextMenu.Trigger />
  <ContextMenu.Content>
    <ContextMenu.Label />
    <ContextMenu.Item />

    <ContextMenu.CheckboxItem />

    <ContextMenu.RadioGroup>
      <ContextMenu.RadioItem value="..." />
    </ContextMenu.RadioGroup>

    <ContextMenu.Sub>
      <ContextMenu.SubTrigger />
      <ContextMenu.SubContent />
    </ContextMenu.Sub>

    <ContextMenu.Separator />
  </ContextMenu.Content>
</ContextMenu>`;

const ContextMenuPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="context-menu">
        Context Menu
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Used to display a menu when the user right-clicks or long-presses an
        element.
      </p>

      <PreviewTabs demo={<ContextMenuDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-context-menu", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/context-menu/context-menu.tsx"
        cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/context-menu/context-menu.css"
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

      <p className="mt-4 text-lg   rounded">
        You can define a color scheme for the context menu, and you can pass it
        as a prop in different parts of it.
        <br /> For example, if you define it in the root, it will affect all
        items. Instead if you define it in a single item, it will override the
        general color scheme and only that item will have that color scheme
      </p>

      <PreviewTabs
        demo={
          <ContextMenu>
            <ContextMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-[--gray-7] flex justify-center items-center">
              Right click here...
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Item>Back</ContextMenu.Item>
              <ContextMenu.Item>Forward</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item colorScheme="red">Exit</ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu>
        }
        demoCode={`<ContextMenu>
              <ContextMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-[--gray-7] flex justify-center items-center">
                Right click here...
              </ContextMenu.Trigger>
              <ContextMenu.Content>
                <ContextMenu.Item>Back</ContextMenu.Item>
                <ContextMenu.Item>Forward</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item colorScheme="red">Exit</ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu>`}
        className="mt-4"
      />

      <FooterButtons labels={["Collapsible", "Dialog"]} />
    </Toc>
  );
};

export { ContextMenuPage };
