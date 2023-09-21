import React, { useEffect } from "react";
import { useGameStore } from "@/modules/game/useGameStore";
import { useController } from "@/utils/hooks/useController";
import { InjectionToken } from "@/constants/injection-token";
import { Card } from "@/modules/game/components/Card";

export const Game = () => {
  const { cards } = useGameStore<IGameStore>((state) => state);

  const { changePathButtonClicked, gameInitialized } =
    useController<IGameController>(InjectionToken.IGameController);

  useEffect(() => {
    gameInitialized();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <Card id={card.id} key={card.id} title={card.title} />
      ))}
      <button onClick={changePathButtonClicked}>change path</button>
    </div>
  );
};
