import { container, Lifecycle } from "tsyringe";
import { StoreApi, UseBoundStore } from "zustand";

import { InjectionToken } from "@/constants/injectionToken";
import { useGameStore } from "@/modules/game/useGameStore";
import { GameService } from "@/modules/game/GameService";
import { GameController } from "@/modules/game/GameController";
import { HistoryService } from "@/modules/global/history/HistoryService";

export type StoreType<T> = UseBoundStore<StoreApi<T>>;

export const bootstrap = async () => {
  try {
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
    container.register<StoreType<IGameStore>>(InjectionToken.IGameStore, {
      useValue: useGameStore,
    });

    return true;
  } catch (e) {
    throw new Error("Error");
  }
};
