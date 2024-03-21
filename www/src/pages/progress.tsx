import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { ProgressDemo } from "@examples/progress";

import code from "@examples/progress?raw";
import { Progress } from "@tredici";

const usage = `<Progress />`;

const ProgressPage = () => {
  return (
    <Toc>
      <Heading as="h1">Progress</Heading>
      <p className="mt-4 text-lg   rounded">
        Displays an indicator showing the completion progress of a task,
        typically displayed as a progress bar.
      </p>

      <PreviewTabs demo={<ProgressDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>

      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-progress", "@radix-ui/colors"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/progress/progress.tsx"
        cssUrl="https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/tredici/src/components/progress/progress.css"
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

      <Heading as="h3" id="indefinite" className="mt-8">
        Indefinite
      </Heading>

      <PreviewTabs
        demo={<Progress indefinite />}
        demoCode="<Progress indefinite />"
        className="mt-4"
      />

      <FooterButtons labels={["Popover", "Radio Group"]} />
    </Toc>
  );
};

export { ProgressPage };
