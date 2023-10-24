import { useCallback, useState } from "react";

const useBool = (init?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!init);

  const setTrue = useCallback(() => setBool(true), []);
  const setFalse = useCallback(() => setBool(false), []);
  const toggle = useCallback(() => setBool((prev) => !prev), []);

  return { bool, setTrue, setFalse, toggle };
};

export { useBool };
