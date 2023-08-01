import { defineStore } from "pinia";
import { router, tokenKey } from "@/routers/router";

const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2OTAzNTc1MTcsImV4cCI6MTcyMTg5MzUxNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SZ3o7KkzuL_JtudQWBC_y701KE5KuOEVHg_3rB4mna4";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    jwtToken: null,
  }),
  actions: {
    async onLogin() {
      try {
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem(tokenKey, jwtToken);
        await router.push("/");
      }
      catch (error) {
      }
    },
    onLogout() {
      this.jwtToken = null;
      localStorage.removeItem(tokenKey);
      router.push("/login");
    },
  },
});
