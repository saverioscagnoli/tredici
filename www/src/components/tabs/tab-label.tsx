import React, { ReactNode } from "react";

type TabLabelProps = {
  children: ReactNode;
};

const TabLabel: React.FC<TabLabelProps> = ({ children }) => {
  return <p className="text-lg font-semibold" children={children} />;
};

export { TabLabel };
