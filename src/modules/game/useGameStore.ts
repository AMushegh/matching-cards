import { create } from "zustand";

export const useGameStore = create<IGameStore>(() => ({
  cards: [
    {
      active: true,
      id: 1,
      isGuessed: false,
      pairId: 2,
      title: "title1",
    },
  ],
  cardsFetching: false,
}));
