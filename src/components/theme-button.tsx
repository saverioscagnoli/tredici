import { useTheme } from "@hooks/use-theme";
import { Button } from "./button";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return (
    <Button.Icon size="md" onClick={toggle}>
      {theme === "dark" ? <BsSun /> : <BsMoonFill />}
    </Button.Icon>
  );
};

export { ThemeButton };
