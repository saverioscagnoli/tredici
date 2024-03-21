import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@components";

import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
