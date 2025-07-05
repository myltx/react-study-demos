import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes, type MenuItem } from "./routes";

// 递归生成路由
const generateRoutes = (routes: MenuItem[]): React.ReactNode[] =>
  routes.flatMap((route) =>
    route.children
      ? generateRoutes(route.children)
      : route.path && route.element
      ? [<Route key={route.path} path={route.path} element={route.element} />]
      : []
  );

const AppRoutes: React.FC = () => {
  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default AppRoutes;
