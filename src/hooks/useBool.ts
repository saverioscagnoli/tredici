import { useCallback, useMemo, useState } from "react";

export const useBool = (init?: boolean) => {
  const [bool, setBool] = useState<boolean>(!!init);

  return [
    bool,
    useMemo(
      () => ({
        setTrue: useCallback(() => setBool(true), []),
        setFalse: useCallback(() => setBool(false), []),
        toggle: useCallback(() => setBool(b => !b), [])
      }),
      []
    )
  ] as const;
};
