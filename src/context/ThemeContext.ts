import { createContext } from "react";

// 定义 Context 类型
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// 创建 Context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
