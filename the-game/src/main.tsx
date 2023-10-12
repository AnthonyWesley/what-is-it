import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "./Global.ts";
import AppProvider from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global></Global>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
