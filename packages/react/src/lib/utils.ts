import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

function darken(className: TemplateStringsArray) {
  return className[0]
    .split(" ")
    .map(c => `dark:${c}`)
    .join(" ");
}

export { cn, darken };
