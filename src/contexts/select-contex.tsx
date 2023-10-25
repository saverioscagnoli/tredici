import { Dispatch, SetStateAction, createContext } from "react";

interface SelectContextProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const SelectContext = createContext<SelectContextProps | null>(null);
