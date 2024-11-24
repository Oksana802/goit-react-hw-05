import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#FFFFFF",
            color: "#ff0000",
            fontSize: "24px",
            duration: 500,
            minWidth: "300px",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
