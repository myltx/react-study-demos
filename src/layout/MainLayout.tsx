import { Link, Outlet } from "react-router-dom";
import { routes, type MenuItem } from "@/router/routes";

function renderMenu(items: MenuItem[]) {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "1rem" }}>
      {items.map((item) => {
        if (item.children) {
          return (
            <li key={item.name}>
              <strong>{item.name}</strong>
              {renderMenu(item.children)}
            </li>
          );
        } else {
          const path = item.index ? "/" : `/${item.path}`;
          return (
            <li key={item.path || "index"}>
              <Link to={path}>{item.name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default function MainLayout() {
  const menuItems = routes[0].children || []; // 从 routes 配置提取 children

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 左侧导航 */}
      <nav
        style={{
          width: "200px",
          background: "#f0f0f0",
          padding: "1rem",
          boxSizing: "border-box",
          overflowY: "auto",
        }}>
        <h3>学习模块</h3>
        {renderMenu(menuItems)}
      </nav>

      {/* 右侧内容区域 */}
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
