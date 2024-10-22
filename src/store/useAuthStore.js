// store/useAuthStore.js

import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    isAdmin: false,
    setUser: (user) => set({ user, isAdmin: user.isAdmin }),
    clearUser: () => set({ user: null, isAdmin: false }),
}));

export default useAuthStore;
