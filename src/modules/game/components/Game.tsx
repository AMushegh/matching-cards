import React from "react";
import { useGameStore } from "@/modules/game/useGameStore";
import { useController } from "@/utils/hooks/useController";
import { InjectionToken } from "@/constants/injectionToken";

export const Game = () => {
  const { cards } = useGameStore<IGameStore>((state) => state);

  const { addButtonClicked } = useController<IGameController>(
    InjectionToken.IGameController
  );

  return (
    <div>
      <button onClick={addButtonClicked}>add</button>
      {cards.map((card) => (
        <h1 key={card}>{card}</h1>
      ))}
    </div>
  );
};
