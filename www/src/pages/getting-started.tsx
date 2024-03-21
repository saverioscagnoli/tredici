import {
  CodeBlock,
  FooterButtons,
  Heading,
  ModuleInstallTabs,
  Toc
} from "@components";

const twindConfigCode = `/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: "class"
};
`;

const cnCode = `import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}`;

const GettingStarted = () => {
  return (
    <Toc>
      <Heading as="h1">Getting started</Heading>

      <p className="mt-2 text-lg rounded">
        First, you need to install Tailwind CSS. You can follow the{" "}
        <a>official documentation</a> to do that. Then, in your{" "}
        <code>tailwind.config.js</code> you have to paste in this code:
      </p>

      <CodeBlock
        className="mt-4"
        code={twindConfigCode}
        language="javascript"
      />

      <Heading className="mt-12" as="h3">
        (Not so much) optional packages
      </Heading>

      <p className="mt-2 text-lg rounded">
        Then I REALLY recommend you to install <a>@radix-ui/colors</a>,{" "}
        <a>tailwind-merge</a> and <a>clsx</a>. These are necessary in the
        majority of the components.
        <br />
        For example, you need <a>@radix-ui/colors</a> in every component with a
        color sceme.
      </p>

      <ModuleInstallTabs
        className="mt-4"
        packages={["@radix-ui/colors", "tailwind-merge", "clsx"]}
      />

      <Heading as="h3" className="mt-12">
        The "cn" function
      </Heading>
      <p className="mt-2 text-lg rounded">
        This is a utility function that I use in most of my components. You can
        copy it and paste it in any place you want (in the project, obv!)
      </p>

      <CodeBlock code={cnCode} language="typescript" className="mt-4" />

      <FooterButtons labels={["Introduction", "Dark Theme"]} />
    </Toc>
  );
};

export { GettingStarted };
