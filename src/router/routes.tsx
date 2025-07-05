import React from "react";
import { HomeOutlined, CodeOutlined } from "@ant-design/icons";
import Home from "../pages/Home";
import UseStateDemo from "../pages/UseStateDemo";
import UseReducerDemo from "../pages/UseReducerDemo";
import UseEffectDemo from "../pages/useEffectDemo";
import UseEffectDemoChange from "../pages/useEffectDemoChange";

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
    children: [
      {
        name: "useState",
        path: "/useState",
        element: <UseStateDemo />,
      },
      {
        name: "useReducer",
        path: "/useReducer",
        element: <UseReducerDemo />,
      },
      {
        name: "useEffectDemo",
        path: "/useEffectDemo",
        element: <UseEffectDemo />,
      },
      {
        name: "UseEffectDemoChange",
        path: "/useEffectDemoChange",
        element: <UseEffectDemoChange />,
      },
    ],
  },
];
