import React from "react";
import { HashRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "./context/ThemeProvider";

document.title = import.meta.env.VITE_APP_TITLE || "默认标题";

const App: React.FC = () => (
  <ThemeProvider>
    <HashRouter>
      <MainLayout />
    </HashRouter>
  </ThemeProvider>
);

export default App;
