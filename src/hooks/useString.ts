import { useCallback, useState } from "react";

export const useString = (init?: string) => {
  const [string, setString] = useState<string>(init ?? "");
  const set = useCallback((s: string) => setString(s), []);

  return [string, set] as const;
};
