import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

function toKebabCase(str: string) {
  return str.replace(/ /, "-").toLowerCase();
}

function componentUrl(name: TemplateStringsArray) {
  return `https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/react/src/components/${name[0]}/${name[0]}.tsx`;
}

function componentCssUrl(name: TemplateStringsArray) {
  return `https://raw.githubusercontent.com/saverioscagnoli/tredici/master/packages/react/src/components/${name[0]}/${name[0]}.css`;
}

export { cn, toKebabCase, componentCssUrl, componentUrl };
