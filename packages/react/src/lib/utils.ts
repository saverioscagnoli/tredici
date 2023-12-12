// @ts-nocheck
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function c<T extends Record<string, Record<string, string>>>(
  base: ClassValue,
  config: T,
  defaults?: {
    [K in keyof T]?: keyof T[K];
  }
) {
  return ({
    className,
    ...props
  }: {
    [K in keyof T]?: keyof T[K];
  } & { className?: ClassValue }) => {
    for (const k in defaults) {
      if (!props[k]) {
        props[k] = defaults[k];
      }
    }

    const classes = [];

    for (const k in props) {
      let v = props[k];
      let cv = config[k];
      if (v && cv) {
        classes.push(cv[v]);
      }
    }

    return cn(...classes, base, className);
  };
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function dark(className: TemplateStringsArray): string {
  return className[0]
    .split(" ")
    .map((c, i) => `${i === 0 ? " " : ""}dark:${c}`)
    .join(" ");
}
