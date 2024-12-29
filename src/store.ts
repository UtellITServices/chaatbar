import { create } from "zustand";

export const useStore = create((set) => ({
  // functions and values for states
  isLogin: false,
  setIsLogin: (data: boolean) => set({ isLogin: data }),

  sidebar: [],
  setSidebar: (data) => set({ sidebar: data }),

  menuCategories: null,
  setMenuCategories: (data: any[]) => set({ menuCategories: data }),

  menuList: [],
  setMenuList: (data: any[]) => set({ menuList: data }),

  categoryLoader: false,
  setCategoryLoader: (data: boolean) => set({ categoryLoader: data }),
}));
