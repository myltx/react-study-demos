import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes, type MenuItem } from "./routes";

// Recursive route generation with redirect support
const generateRoutes = (routes: MenuItem[]): React.ReactNode[] => {
  return routes
    .map((route: MenuItem) => {
      if (route.children) {
        // For parent routes with children
        return [
          // Parent route that redirects to first child
          route.path && !route.element && (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Navigate
                  to={`${route.path}/${
                    route.children[0]?.path || "".split("/").pop()
                  }`}
                  replace
                />
              }
            />
          ),
          // The actual parent route if it has its own element
          route.path && route.element && (
            <Route key={route.path} path={route.path} element={route.element} />
          ),
          // Child routes
          ...generateRoutes(route.children),
        ];
      } else if (route.path && route.element) {
        // Regular routes
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      }
      return null;
    })
    .flat()
    .filter(Boolean); // Remove any null/undefined values
};

const AppRoutes: React.FC = () => {
  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default AppRoutes;
