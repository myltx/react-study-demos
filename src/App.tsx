import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { routes, type MenuItem } from "./router/routes";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

const { Header, Sider, Content } = Layout;

// 递归生成 Menu items
const generateMenuItems = (routes: MenuItem[]) =>
  routes.map((route) => ({
    key: route.path || route.name,
    icon: route.icon,
    label: route.name,
    children: route.children ? generateMenuItems(route.children) : undefined,
  }));

const LayoutContent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = generateMenuItems(routes);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={menuItems}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "86.4vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

const App: React.FC = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <LayoutContent />
  </BrowserRouter>
);

export default App;
