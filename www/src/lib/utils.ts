import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

function toKebabCase(str: string) {
  return str.replace(/ /, "-").toLowerCase();
}

export { cn, toKebabCase };
