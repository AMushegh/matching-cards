import { InjectionToken } from "@/constants/injectionToken";
import { StoreType } from "@/utils/bootstrap";
import { inject, injectable } from "tsyringe";

@injectable()
export class GameService implements IGameService {
  constructor(
    @inject(InjectionToken.IHistoryService)
    private _historyService: IHistoryService,
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

  public changePath(): void {
    this._historyService.push("/test");
  }
}
