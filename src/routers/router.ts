import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "~pages";

const routes = setupLayouts(generatedRoutes);
export const tokenKey = "jwt";
const authWhileList = [
  "/login",
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
router.beforeEach((to, from, next) => {
  const jwtToken = localStorage.getItem(tokenKey);
  if (!authWhileList.includes(to.path) && !jwtToken)
    next({ path: "login" });
  else if (authWhileList.includes(to.path) && jwtToken)
    next({ path: "" });
  else next();
});
