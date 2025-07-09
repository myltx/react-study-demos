import React from "react";
import { HomeOutlined, CodeOutlined } from "@ant-design/icons";
import Home from "../pages/Home";
import UseStateDemo from "@/pages/useState/useStateDemoPage";
import UseReducerDemo from "@/pages/useReducer/useReducerDemoPage";
import UseEffectDemo from "@/pages/useEffect/useEffectDemoPage";
import UseEffectDemoChange from "@/pages/useEffect/useEffectDemoChangePage";
import UseMemo from "@/pages/useMemo/useMemoDemoPage";
import UseCallbackDemoPage from "@/pages/useCallback/index";
export interface MenuItem {
  name: string; // 菜单名
  path?: string; // 路由路径
  icon?: React.ReactNode; // 菜单图标
  element?: React.ReactNode; // 路由组件
  children?: MenuItem[]; // 子菜单
}

export const routes: MenuItem[] = [
  {
    name: "首页",
    path: "/",
    icon: <HomeOutlined />,
    element: <Home />,
  },
  {
    name: "Hooks",
    icon: <CodeOutlined />,
    path: "/hooks",
    children: [
      {
        name: "useState",
        path: "/hooks/useState",
        element: <UseStateDemo />,
      },
      {
        name: "useReducer",
        path: "/hooks/useReducer",
        element: <UseReducerDemo />,
      },
      {
        name: "useEffect",
        path: "/hooks/useEffect",
        element: <UseEffectDemo />,
      },
      {
        name: "UseEffectChange",
        path: "/hooks/useEffectChange",
        element: <UseEffectDemoChange />,
      },
      {
        name: "UseMemo",
        path: "/hooks/useMemo",
        element: <UseMemo />,
      },
      {
        name: "UseCallback",
        path: "/hooks/useCallback",
        element: <UseCallbackDemoPage />,
      },
    ],
  },
];
