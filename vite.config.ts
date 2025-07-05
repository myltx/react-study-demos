import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = mode === "production" ? "/react-study-demos/" : "/";
  console.log(env.VITE_BASE_PATH);
  return {
    base: env.VITE_BASE_PATH || "/",
    define: {
      __BASE__: JSON.stringify(base),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
