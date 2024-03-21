import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { AspectRatioDemo } from "@examples/aspect-ratio";

import code from "@examples/aspect-ratio?raw";
import { componentUrl } from "@lib";

const usage = `<AspectRatio>
  <img />
</AspectRatio>`;

const AspectRatioPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="aspect-ratio">
        Aspect Ratio
      </Heading>
      <p className="mt-4 text-lg   rounded">
        Used to display content in a specific aspect ratio.
      </p>

      <PreviewTabs demo={<AspectRatioDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg   rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/react-aspect-ratio"]}
      />

      <p className="mt-8 text-lg   rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs componentUrl={componentUrl`aspect-ratio`} className="mt-8 " />

      <Heading as="h2" id="usage" className="mt-8">
        Usage
      </Heading>

      <CodeBlock
        code={usage}
        language="typescript"
        copyButton={false}
        className="mt-4"
      />

      <FooterButtons labels={["Alert Dialog", "Avatar"]} />
    </Toc>
  );
};

export { AspectRatioPage };
