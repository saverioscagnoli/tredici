import { cn, toKebabCase } from "@lib";
import React, { ComponentProps } from "react";
import { useNavigate } from "react-router-dom";

const TabHeader: React.FC<ComponentProps<"span">> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn("font-bold text-lg", "mb-2 mt-2", className)}
      {...props}
    />
  );
};

const TabClickable: React.FC<ComponentProps<"span">> = ({
  className,
  children,
  ...props
}) => {
  const kebab = toKebabCase(children as string);
  const path = window.location.pathname.split("/").pop();
  const active = path === kebab;

  return (
    <span
      className={cn(
        "px-4 py-2",
        "rounded-lg",
        "cursor-pointer",
        active && "bg-[--gray-4] underline",
        "hover:bg-[--gray-4]",
        ["hover:underline", "underline-offset-2"],
        className
      )}
      children={children}
      {...props}
    />
  );
};

type TabElement = {
  type: "header" | "clickable";
  label: string;
};

const elements: TabElement[] = [
  { type: "header", label: "Overview" },
  { type: "clickable", label: "Introduction" },
  { type: "clickable", label: "Getting Started" },
  { type: "clickable", label: "Dark Theme" },
  { type: "header", label: "Components" },
  { type: "clickable", label: "Alert Dialog" },
  { type: "clickable", label: "Aspect Ratio" },
  { type: "clickable", label: "Avatar" },
  { type: "clickable", label: "Button" },
  { type: "clickable", label: "Checkbox" },
  { type: "clickable", label: "Collapsible" },
  { type: "clickable", label: "Context Menu" },
  { type: "clickable", label: "Dialog" },
  { type: "clickable", label: "Dropdown Menu" },
  { type: "clickable", label: "Icon Button" },
  { type: "clickable", label: "Input" },
  { type: "clickable", label: "Menubar" },
  { type: "clickable", label: "Popover" },
  { type: "clickable", label: "Radio Group" },
  { type: "clickable", label: "Scroll Area" },
  { type: "clickable", label: "Select" },
  { type: "clickable", label: "Slider" },
  { type: "clickable", label: "Switch" },
  { type: "clickable", label: "Tabs" },
  { type: "clickable", label: "Toast" },
  { type: "clickable", label: "Tooltip" }
];

const SideTabs: React.FC<ComponentProps<"div">> = ({ className, ...props }) => {
  const nav = useNavigate();

  const onClick = (label: string) => () => {
    nav(label === "Introduction" ? "/docs" : `/docs/${toKebabCase(label)}`);
  };

  return (
    <div
      className={cn(
        "lg:!flex !hidden",
        "w-[300px] h-[calc(100%-4rem)]",
        "fixed mt-16",
        "overflow-y-auto",
        "flex flex-col gap-1",
        "px-16 py-4",
        "bg-trasnparent",
        "backdrop-blur",
        "border-r border-r-[--gray-7]",
        "side-tabs",
        className
      )}
      {...props}
    >
      {elements.map(e =>
        e.type === "header" ? (
          <TabHeader key={e.label}>{e.label}</TabHeader>
        ) : (
          <TabClickable key={e.label} onClick={onClick(e.label)}>
            {e.label}
          </TabClickable>
        )
      )}
    </div>
  );
};

export { SideTabs, elements };