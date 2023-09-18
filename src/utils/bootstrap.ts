import { container, Lifecycle } from "tsyringe";

import { InjectionToken } from "@/constants/injectionToken";
import { HistoryService } from "@/modules/global/history/HistoryService";
import { useGameStore } from "@/modules/game/useGameStore";
import { GameService } from "@/modules/game/GameService";
import { GameController } from "@/modules/game/GameController";
import { GameApiService } from "@/modules/game/GameApiService";

function injectDeps() {
  // global
  container.register<IHistoryService>(
    InjectionToken.IHistoryService,
    HistoryService,
    {
      lifecycle: Lifecycle.Singleton,
    }
  );

  // game
  container.register<IGameService>(InjectionToken.IGameService, GameService, {
    lifecycle: Lifecycle.Singleton,
  });
  container.register<IGameController>(
    InjectionToken.IGameController,
    GameController,
    { lifecycle: Lifecycle.Singleton }
  );
  container.register<IGameApiService>(
    InjectionToken.IGameApiService,
    GameApiService,
    { lifecycle: Lifecycle.Singleton }
  );
  container.register<StoreType<IGameStore>>(InjectionToken.IGameStore, {
    useValue: useGameStore,
  });
}

export const bootstrap = async () => {
  try {
    injectDeps();

    return true;
  } catch (e) {
    throw new Error("Error");
  }
};
