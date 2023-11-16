import { Button, Tooltip, useTheme } from "tredici";
import {
  RxSun,
  RxMoon,
  RxGithubLogo,
  RxClipboard,
  RxCheck
} from "react-icons/rx";
import { useEffect, useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

function App() {
  const { theme, toggle } = useTheme();
  const [copied, setCopied] = useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install tredici");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-14 flex">
        <div className="w-full h-full flex justify-start items-center ml-44">
          <p className="text-4xl font font-bold mr-4">13</p>
        </div>
        <div className="w-full h-full flex justify-end items-center mr-72 gap-4">
          <a href="https://github.com/saverioscagnoli/tredici" target="_blank">
            <Button.Icon
              icon={<RxGithubLogo />}
              colorScheme="gray"
              variant="ghost"
            />
          </a>
          <Button.Icon
            icon={theme === "dark" ? <RxSun /> : <RxMoon />}
            onClick={toggle}
          />
        </div>
      </div>

      <div className="w-1/2 h-full flex flex-col self-center mt-4">
        <h1 className="text-4xl font-bold">Installation</h1>
        <p className="mt-2 text-lg">
          To start using Tredici in your project, run the following command
          inside your terminal:
        </p>
        <div className="w-80 h-14 bg-blue-950 rounded-xl mt-4 flex items-center justify-between self-center">
          <p className="font-mono ml-4 text-white">npm install tredici</p>
          <Tooltip open={copied}>
            <Tooltip.Trigger>
              <Button.Icon
                colorScheme="gray"
                icon={copied ? <RxCheck /> : <RxClipboard />}
                className="text-white mr-2"
                onClick={copy}
              />
            </Tooltip.Trigger>
            <Tooltip.Body>
              Copied!
              <Tooltip.Arrow />
            </Tooltip.Body>
          </Tooltip>
        </div>
        <p className="text-lg mt-4">
          After the installation, you need to wrap your entier App component
          with the{" "}
          <span className="font-mono bg-blue-950 rounded p-0.5 text-white">
            Tredici
          </span>{" "}
          component.
        </p>

        <div className="w-[30rem] bg-blue-950 rounded-xl mt-4 flex items-center justify-between self-center p-2">
          <Highlight className="javascript bg-transparent">
            {[
              "import ReactDOM from 'react-dom/client';",
              "import App from './App'",
              "import { Tredici } from 'tredici';",
              " ",
              "const root = document.getElementById('root')!;",
              " ",
              "ReactDOM.createRoot(root).render(",
              "  <Tredici>",
              "    <App />",
              "  </Tredici>",
              ");"
            ].join("\n")}
          </Highlight>
        </div>
      </div>
    </div>
  );
}

export default App;
