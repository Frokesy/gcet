import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SmoothScroll from "./components/defaults/SmoothScroll.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>
);
