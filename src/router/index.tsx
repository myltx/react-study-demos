import { useRoutes } from "react-router-dom";
import { routes } from "@/router/routes";

export default function AppRoutes() {
  return useRoutes(routes);
}
