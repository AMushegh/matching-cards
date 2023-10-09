import { container, Lifecycle } from "tsyringe";

import { InjectionToken } from "@/constants/injection-token";
import { HistoryService } from "@/modules/global/history/HistoryService";
import { useGameStore } from "@/modules/game/useGameStore";
import { GameService } from "@/modules/game/GameService";
import { GameController } from "@/modules/game/GameController";
import { GameApiService } from "@/modules/game/GameApiService";
import { ApiService } from "@/modules/global/api/ApiService";
import { AuthService } from "@/modules/global/auth/AuthService";
import { useAuthStore } from "@/modules/global/auth/useAuthStore";
import { AuthController } from "@/modules/global/auth/AuthController";

function injectDeps() {
  // global
  container.register<IHistoryService>(
    InjectionToken.IHistoryService,
    HistoryService,
    {
      lifecycle: Lifecycle.Singleton,
    }
  );
  container.register<IApiService>(InjectionToken.IApiService, ApiService, {
    lifecycle: Lifecycle.Singleton,
  });
  container.register<IAuthService>(InjectionToken.IAuthService, AuthService, {
    lifecycle: Lifecycle.Singleton,
  });
  container.register<StoreType<IAuthStore>>(InjectionToken.IAuthStore, {
    useValue: useAuthStore,
  });
  container.register<IAuthController>(
    InjectionToken.IAuthController,
    AuthController,
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
