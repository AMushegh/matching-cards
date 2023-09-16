import { StoreApi, UseBoundStore } from "zustand";

declare global {
  type StoreType<T> = UseBoundStore<StoreApi<T>>;
}
