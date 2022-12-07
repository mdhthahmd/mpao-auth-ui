import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

const LOCAL_STORAGE_TOKEN_KEY = "jwt-token";

export const useTokenStore = defineStore("token", () => {
  const token = ref("");

  function login(responseToken: string): void {
    token.value = responseToken;
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, responseToken);
  }

  function isLoggedIn(): boolean {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) !== null;
  }

  function logout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
});
