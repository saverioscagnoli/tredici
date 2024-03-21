import {
  CodeBlock,
  CodeTabs,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  PreviewTabs,
  Toc
} from "@components";
import { SpinnerDemo } from "@examples/spinner";
import { componentCssUrl, componentUrl } from "@lib";

import code from "@examples/spinner?raw";
import { Spinner } from "@tredici";

const usage = `<Spinner />`;

const SpinnerPage = () => {
  return (
    <Toc>
      <Heading as="h1" id="spinner">
        Spinner
      </Heading>
      <p className="mt-4 text-lg rounded">
        A spinner is a type of loading indicator that represents an
        indeterminate amount of time.
      </p>

      <PreviewTabs demo={<SpinnerDemo />} demoCode={code} />

      <Heading as="h2" id="installation" className="mt-8">
        Installation
      </Heading>
      <p className="mt-2 text-lg rounded">
        First, install the required packages.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/colors", "class-variance-authority"]}
      />

      <p className="mt-8 text-lg rounded">
        Then you can import the component files and use them in your app.
      </p>

      <CodeTabs
        componentUrl={componentUrl`spinner`}
        cssUrl={componentCssUrl`spinner`}
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

      <Heading as="h3" id="no-track" className="mt-8">
        No Track
      </Heading>

      <p className="mt-2 text-lg">
        You can set the <code>noTrack</code> prop to <code>true</code> to hide
        the track.
      </p>

      <PreviewTabs
        demo={<Spinner size={50} noTrack />}
        demoCode={`<Spinner size={50} noTrack />`}
      />

      <FooterButtons labels={["Slider", "Switch"]} />
    </Toc>
  );
};

export { SpinnerPage };
