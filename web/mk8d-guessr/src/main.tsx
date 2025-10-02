import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GameView from "./pages/GameView";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameView />
  </StrictMode>,
);
