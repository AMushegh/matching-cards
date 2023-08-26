import { create } from "zustand";

export const useGameStore = create<IGameStore>(() => ({
  cards: [1, 2, 3],
}));
