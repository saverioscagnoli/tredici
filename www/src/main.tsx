import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
