import { cn, toKebabCase } from "@lib";
import React, { ComponentProps, ReactNode } from "react";
import { Heading } from "./heading";
import { DropdownMenu, IconButton } from "@tredici";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons";
import { useTheme } from "@hooks";
import { Link, useNavigate } from "react-router-dom";
import { elements } from "./side-tabs";

type HamburgerMenuProps = {
  children: ReactNode;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children }) => {
  const nav = useNavigate();

  const onClick = (label: string) => () => {
    nav(label === "Introduction" ? "/docs" : `/docs/${toKebabCase(label)}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50">
        {elements.map(e =>
          e.type === "header" ? (
            <DropdownMenu.Label key={e.label}>{e.label}</DropdownMenu.Label>
          ) : (
            <DropdownMenu.Item key={e.label} onClick={onClick(e.label)}>
              {e.label}
            </DropdownMenu.Item>
          )
        )}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

const Navbar: React.FC<ComponentProps<"div">> = ({ className, ...props }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "w-full h-16",
        "flex justify-between items-center",
        "fixed top-0",
        "z-10",
        "md:px-20 px-5",
        "bg-transparent backdrop-blur",
        "border-b border-b-[--slate-7]",
        className
      )}
      {...props}
    >
      <Heading as="h2">Tredici</Heading>
      <Link
        to="/docs"
        className="hidden sm:block font-bold hover:underline underline-offset-2 cursor-pointer"
      >
        Documentation
      </Link>
      <div className="flex items-center gap-4">
        <HamburgerMenu>
          <IconButton
            variant="secondary"
            colorScheme="b/w"
            className="lg:hidden"
            icon={<HamburgerMenuIcon />}
          />
        </HamburgerMenu>
        <a href="https://github.com/saverioscagnoli/tredici" target="_blank">
          <IconButton
            variant="secondary"
            colorScheme="b/w"
            icon={<GitHubLogoIcon />}
          />
        </a>
        <IconButton
          variant="secondary"
          colorScheme="b/w"
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export { Navbar };
