import { Button, useTheme } from "tredici";
import { RxSun, RxMoon, RxGithubLogo } from "react-icons/rx";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-14 flex">
        <div className="w-full h-full flex justify-start items-center ml-44">
          <p className="text-4xl font font-bold">13</p>
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
    </div>
  );
}

export default App;
