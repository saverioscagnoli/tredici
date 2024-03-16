import { Navbar, SideTabs } from "@components";
import { useTheme } from "@hooks";
import { cn } from "@lib";
import { Introduction } from "@pages";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [bg, setBg] = useState<"pattern" | "pattern-dark">("pattern");
  const { theme } = useTheme();

  useEffect(() => {
    setBg(theme === "dark" ? "pattern-dark" : "pattern");
  }, [theme]);

  return (
    <Router>
      <div
        className="w-screen h-screen"
        style={{
          backgroundImage: `url("/${bg}.svg")`
        }}
      >
        <Navbar />
        <SideTabs />
        <div
          className={cn(
            "flex flex-col justify-center",
            "lg:block",
            "fixed",
            "w-full h-[calc(100%-4rem)]",
            "mt-16 ml-[300px]",
            "px-32 py-20"
          )}
        >
          <Routes>
            <Route path="/docs" element={<Introduction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
