import { Button } from "@components/button";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";

function App() {
  return (
    <Tredici>
      <ThemeToggler />
    </Tredici>
  );
}

const ThemeToggler = () => {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button onClick={toggle} className="bg-red">Solid</Button>
      <p>{theme}</p>
    </div>
  );
};

export default App;
