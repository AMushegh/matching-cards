import { InjectionToken } from "@/constants/injectionToken";
import { StoreType } from "@/utils/bootstrap";
import { inject, injectable } from "tsyringe";

@injectable()
export class GameService implements IGameService {
  constructor(
    @inject(InjectionToken.IGameStore) private _store: StoreType<IGameStore>
  ) {}

  public addCard(): void {
    this._store.setState({
      cards: [
        ...this._store.getState().cards,
        this._store.getState().cards.length + 1,
      ],
    });
  }
}
