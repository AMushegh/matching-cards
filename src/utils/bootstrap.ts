import { container, Lifecycle } from "tsyringe";

import { InjectionToken } from "@/constants/injection-token";
import { HistoryService } from "@/modules/shared/history/HistoryService";
import { useGameStore } from "@/modules/game/useGameStore";
import { GameService } from "@/modules/game/GameService";
import { GameController } from "@/modules/game/GameController";
import { GameApiService } from "@/modules/game/GameApiService";
import { ApiService } from "@/modules/shared/api/ApiService";
import { AuthService } from "@/modules/shared/auth/AuthService";
import { useAuthStore } from "@/modules/shared/auth/useAuthStore";
import { AuthController } from "@/modules/shared/auth/AuthController";

export function injectDeps() {
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

const initServices = () => {
  const authService = container.resolve<IAuthService>(
    InjectionToken.IAuthService
  );

  authService.setAuthStateOnAppReady();
};

export const bootstrap = async () => {
  try {
    injectDeps();
    initServices();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};
