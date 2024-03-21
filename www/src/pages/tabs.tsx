import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { TabsDemo } from "@examples/tabs";

import code from "@examples/tabs?raw";
import { componentUrl } from "@lib";
import { Tabs } from "@tredici";

const usage = `<Tabs>
  <Tabs.List>
    <Tabs.Trigger value={...} />
  </Tabs.List>
  <Tabs.Content value={...} />
</Tabs>`;

const flushed = `<Tabs variant="flushed">
  <Tabs.List>
    <Tabs.Trigger value="1">tab 1</Tabs.Trigger>
    <Tabs.Trigger value="2">tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="1">content 1</Tabs.Content>
  <Tabs.Content value="2">content 2</Tabs.Content>
</Tabs>`;

const TabsPage = () => {
  return (
    <Toc>
      <Heading as="h1">Tabs</Heading>
      <p className="mt-4 text-lg   rounded">
        A set of layered sections of content—known as tab panels—that are
        displayed one at a time.
      </p>

      <PreviewTabs className="h-[450px]" demo={<TabsDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-tabs", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`tabs`}
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

      <Heading as="h3" id="flushed" className="mt-8">
        Flushed
      </Heading>

      <PreviewTabs
        demo={
          <Tabs variant="flushed">
            <Tabs.List>
              <Tabs.Trigger value="1">tab 1</Tabs.Trigger>
              <Tabs.Trigger value="2">tab 2</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="1">content 1</Tabs.Content>
            <Tabs.Content value="2">content 2</Tabs.Content>
          </Tabs>
        }
        demoCode={flushed}
        className="mt-4"
      />

      <FooterButtons labels={["Switch", "Toast"]} />
    </Toc>
  );
};

export { TabsPage };
