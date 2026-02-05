import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("manifest.json", "routes/webAppManifest.ts"),
] satisfies RouteConfig;
