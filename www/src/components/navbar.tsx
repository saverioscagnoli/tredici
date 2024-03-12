import { Button, IconButton } from "@tredici";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "@hooks";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-12 sticky flex justify-between items-center px-8 border-b border-b-[--gray-7]">
      <p className="text-xl font-semibold">Tredici</p>
      <div className="flex gap-4">
        <a href="/docs">
          <Button variant="link" colorScheme="b/w" size="sm" className="mt-1">
            Documentation
          </Button>
        </a>
        <a href="https://github.com/saverioscagnoli/tredici" target="_blank">
          <IconButton
            icon={<GitHubLogoIcon />}
            variant="secondary"
            colorScheme="b/w"
          />
        </a>
        <IconButton
          icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
          variant="secondary"
          colorScheme="b/w"
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}

export { Navbar };
