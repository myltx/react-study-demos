import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

document.title = import.meta.env.VITE_APP_TITLE || "默认标题";
const App: React.FC = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <MainLayout />
  </BrowserRouter>
);

export default App;
