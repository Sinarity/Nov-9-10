import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAppStore = create((set, get) => ({
  isDarkTheme: false,
  fontSizeKey: "small",
  isSoundEnabled: true,
  isOffline: false,

  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
  toggleSound: () =>
    set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  setIsOffline: () => set((state) => ({ isOffline: !state.isOffline })),
  setFontSize: (fontSizeKey) => set({ fontSizeKey }),

  // Data Caching State

  events: [],
  isLoadingEvents: false,
  eventsError: null,
  lastFetchTimeStamp: null,

  fetchEvents: () => {
    try {
      const response = fetch(
        "https://elevate-horizon-connect-api.onrender.com/api/events",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,

          },
        },
      );
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      const eventsArray = response.json();
      set({
        events: eventsArray,
        isLoadingEvents: false,
        isOffline: false,
        eventsError: null,
        lastFetchTimeStamp: Date.now(),
      });
    } catch (error) {}
    console.log(error.message);
  },
}));


