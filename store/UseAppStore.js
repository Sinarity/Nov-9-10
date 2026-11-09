import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAppStore = create((set, get) => ({
  isDarkTheme: false,
  fontSizeKey: "medium",
  isSoundEnabled: true,
  isOffline: false,

  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
  toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  setIsOffline: () => set((state) => ({ isOffline: !state.isOffline })),
  setFontSize: (fontSizeKey) => set({ fontSizeKey }),
}));
