import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./layout/Layout";
import AlertProvider from "./contexts/AlertProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlertProvider>
      <Layout>
        <App />
      </Layout>
    </AlertProvider>
  </React.StrictMode>
);
