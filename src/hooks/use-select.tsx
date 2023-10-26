import { SelectContext } from "@contexts/select-contex";
import { useContext } from "react";

export const useSelect = () => {
  const ctx = useContext(SelectContext);

  if (!ctx) {
    throw new Error("useSelect must be used within a SelectProvider.");
  }

  return ctx;
};
