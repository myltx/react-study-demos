import React from "react";
import { HashRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

document.title = import.meta.env.VITE_APP_TITLE || "默认标题";

const App: React.FC = () => (
  <HashRouter>
    <MainLayout />
  </HashRouter>
);

export default App;
