import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("manifest.json", "routes/manifest.json.ts"),
] satisfies RouteConfig;
