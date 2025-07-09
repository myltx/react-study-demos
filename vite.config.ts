import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base =
    env.VITE_BASE_PATH || (mode === "production" ? "/react-study-demos/" : "/");

  console.log("Base path:", base);

  return {
    base,
    define: {
      __BASE__: JSON.stringify(base),
    },
    plugins: [
      react(),
      Unocss({
        // UnoCSS 配置
        presets: [
          presetUno(), // 默认预设
          presetAttributify(),
          //   {
          //   prefix: "un-",
          //   strict: false,
          // } // 启用属性模式
          presetIcons({
            // 图标预设（可选）
            scale: 1.2,
            warn: true,
          }),
        ],
        // 自定义规则
        rules: [
          [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })],
          [
            "p-safe",
            {
              padding:
                "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
            },
          ],
        ],
        // 快捷方式
        shortcuts: {
          btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
          "btn-primary": "btn bg-blue-500 text-white hover:bg-blue-700",
        },
        // 主题配置
        theme: {
          colors: {
            primary: "#3498db",
          },
          breakpoints: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // 优化构建配置
    build: {
      sourcemap: mode !== "production",
      chunkSizeWarningLimit: 1600,
    },
  };
});
