import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    set => ({
      authToken: null,
      authEmail: null,
      userId: null,
      userName: null,

      setAuthData: ({ authToken, email, userId, userName }) =>
        set({
          authToken,
          authEmail: email,
          userId,
          userName,
        }),

      clearAuthData: () =>
        set({
          authToken: null,
          authEmail: null,
          userId: null,
          userName: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
