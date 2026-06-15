import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index('routes/home.tsx'),
    route("linkedin", "routes/handlers/external-redirect.ts", { id: "vanity-linkedin" }),
    route("git", "routes/handlers/external-redirect.ts", { id: "vanity-git" })
] satisfies RouteConfig;
