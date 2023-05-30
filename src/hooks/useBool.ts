import { useCallback, useState } from "react";

export const useBool = (init?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!init);
  const toggle = () => setBool(p => !p);
  const setTrue = useCallback(() => setBool(true), []);
  const setFalse = useCallback(() => setBool(false), []);

  return [bool, { toggle, setTrue, setFalse }] as const;
};
