import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const App: React.FC = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <MainLayout />
  </BrowserRouter>
);

export default App;
