import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useStore } from "@/stores";

export const authGuard = async (to: RouteLocationNormalized, next: NavigationGuardNext) => {
  const store = useStore();
  try {
    /* The route is for a guest, see guest option on routes.ts */
    if (to.meta.guest === true) {
      return next();
    }
    return next();
  } catch (error) {
    return next({ name: "apewear" });
  } finally {
    store.setLoading(false);
  }
};
