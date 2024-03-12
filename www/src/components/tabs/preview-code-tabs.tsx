import React, { ComponentProps, ReactNode } from "react";

type TabElementProps = {
  children: ReactNode;
};

const PreviewCodeTabs: React.FC<TabElementProps & ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  return (
    <div className="flex flex-col" {...props}>
      <div className="w-full h-[500px] flex items-center justify-center border border-[--gray-7] rounded-lg bg-transparent">
        {children}
      </div>
    </div>
  );
};

export { PreviewCodeTabs };
