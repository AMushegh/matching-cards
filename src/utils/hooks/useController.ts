import { useMemo } from "react";
import { InjectionToken, container } from "tsyringe";

export const useController = <T>(injectionToken: InjectionToken<T>) =>
  useMemo(() => container.resolve<T>(injectionToken), []);
