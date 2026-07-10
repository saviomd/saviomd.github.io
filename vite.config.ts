import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [...(process.env.STORYBOOK ? [] : [reactRouter()]), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
});
