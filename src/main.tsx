import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css"; // 或其他重置样式

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
