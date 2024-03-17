import { Navbar, SideTabs } from "@components";
import { useTheme } from "@hooks";
import { cn } from "@lib";
import {
  AlertDialogPage,
  AspectRatioPage,
  AvatarPage,
  Introduction
} from "@pages";
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
            "overflow-y-auto",
            "w-full h-full",
            "ml-[300px]",
            "px-32 py-20"
          )}
        >
          <Routes>
            <Route path="/docs" element={<Introduction />} />
            <Route path="/docs/alert-dialog" element={<AlertDialogPage />} />
            <Route path="/docs/aspect-ratio" element={<AspectRatioPage />} />
            <Route path="/docs/avatar" element={<AvatarPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
