import { container, Lifecycle } from "tsyringe";

import { InjectionToken } from "@/constants/injectionToken";
import { Controller } from "@/Controller";
import { Service } from "@/Service";

export const bootstrap = () => {
  return new Promise<void>((resolve, reject) => {
    try {
      container.register<IController>(InjectionToken.IController, Controller, {
        lifecycle: Lifecycle.Singleton,
      });
      container.register<IService>(InjectionToken.IService, Service, {
        lifecycle: Lifecycle.Singleton,
      });

      resolve();
    } catch {
      reject();
    }
  });
};
