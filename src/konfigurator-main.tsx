import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { KonfiguratorPage } from "./pages/KonfiguratorPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KonfiguratorPage />
  </StrictMode>,
);
