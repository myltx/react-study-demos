import { useTheme } from "@/context/useTheme";

export default function ThemedBox() {
  const { theme } = useTheme();

  const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "100px",
    marginTop: "20px",
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <div style={boxStyle}>这是 {theme} 主题</div>;
}
