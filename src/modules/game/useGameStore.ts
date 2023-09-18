import { create } from "zustand";

export const useGameStore = create<IGameStore>(() => ({
  cards: [],
  cardsFetching: false,
}));
