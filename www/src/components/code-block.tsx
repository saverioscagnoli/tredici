import { cn } from "@lib";
import hljs from "highlight.js";
import { ComponentProps } from "react";
import { CopyButton } from "./copy-button";
import { ScrollArea } from "./tredici/scroll-area";

type CodeBlockProps = ComponentProps<"div"> & {
  code: string;
  language: string;
  copyButton?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  code,
  language,
  copyButton = true,
  ...props
}) => {
  return (
    <ScrollArea
      className={cn(
        "h-fit",
        "rounded",
        "p-6 relative",
        "bg-[--gray-1]",
        "border border-[--gray-7]",
        className
      )}
    >
      <div className="max-h-[500px]" {...props}>
        <pre className="overflow-x-auto font-mono text-sm">
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(code, { language }).value
            }}
          />
        </pre>
        {copyButton && (
          <CopyButton className="absolute top-4 right-4" text={code} />
        )}
      </div>
      <ScrollArea.Scrollbar colorScheme="gray" />
    </ScrollArea>
  );
};

export { CodeBlock };
