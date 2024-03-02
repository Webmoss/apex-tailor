import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { authGuard } from "./guards";
import routes from "./routes";

const baseURL = "";
const baseTitle = "ApeWear";

const router = createRouter({
  history: createWebHistory(baseURL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, left: 0 };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  authGuard(to, next);
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title ? `${to.meta.title} - ${baseTitle}` : baseTitle;
  });
});

export default router;
