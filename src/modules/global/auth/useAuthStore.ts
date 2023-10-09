import { create } from "zustand";

export const useAuthStore = create<IAuthStore>(() => ({
  isLoggedIn: false,
}));
