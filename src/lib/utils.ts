import { ReactNode, isValidElement, Children } from "react";

export function join(...classes: (string | undefined)[]) {
  return classes.join(" ");
}

export function findChild(children: ReactNode, child: unknown) {
  return Children.toArray(children).find(
    c => isValidElement(c) && c.type === child
  );
}
