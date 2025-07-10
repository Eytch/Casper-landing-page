import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gradient-to-t from-orange-400 to-slate-100 h-screen md:overflow-hidden">
      <App />
    </div>
  </StrictMode>
);
