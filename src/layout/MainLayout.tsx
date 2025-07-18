import React, { useEffect, useState } from "react";
import {
  GithubOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, theme, Tooltip } from "antd";
import { routes, type MenuItem } from "../router/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { type MenuProps } from "antd";
import AppRoutes from "../router/AppRoutes";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/context/useTheme";

const { Header, Sider, Content } = Layout;

type MenuItemType = Required<MenuProps>["items"][number];

// 递归生成 Menu items
const generateMenuItems = (routes: MenuItem[]): MenuItemType[] =>
  routes.map((route) => ({
    key: route.path || route.name,
    icon: route.icon,
    label: route.name,
    children: route.children ? generateMenuItems(route.children) : undefined,
  }));

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const { theme: colorTheme } = useTheme(); // 使用你的 useTheme Hook
  const menuItems = generateMenuItems(routes);
  const location = useLocation(); // 获取当前路由信息
  const currentPath = location.pathname; // 返回的是 `#` 后的部分，如 `/useState`

  // 获取当前 path 的父 key
  const getOpenKeys = (routes: MenuItem[], currentPath: string): string[] => {
    for (const route of routes) {
      if (route.children) {
        const match = route.children.find(
          (child) => child.path === currentPath
        );
        if (match) {
          return [route.path || route.name];
        } else {
          // 递归查找多级菜单
          const nested = getOpenKeys(route.children, currentPath);
          if (nested.length) {
            return [route.path || route.name, ...nested];
          }
        }
      }
    }
    return [];
  };

  const [openKeys, setOpenKeys] = useState<string[]>(
    getOpenKeys(routes, currentPath)
  );
  // 在 location.pathname 变化时更新 openKeys
  useEffect(() => {
    setOpenKeys(getOpenKeys(routes, currentPath));
  }, [currentPath]);
  return (
    <Layout
      className={
        colorTheme === "light" ? "bg-white text-black" : "bg-black text-white"
      }>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[currentPath]}
          openKeys={openKeys}
          onOpenChange={(keys) => setOpenKeys(keys)}
          items={menuItems}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="flex items-center justify-between">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Space className="mr-6">
            <ThemeSwitcher />

            <Tooltip placement="top" title="源码">
              <GithubOutlined
                text="18px"
                onClick={() =>
                  window.open("https://github.com/myltx/react-study-demos")
                }
              />
            </Tooltip>
          </Space>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "86.4vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
          }}
          className="">
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
