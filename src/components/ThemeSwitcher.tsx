import { useTheme } from "@/context/useTheme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>当前主题: {theme} （点击切换）</button>;
}
