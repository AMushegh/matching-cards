import { inject, injectable } from "tsyringe";
import { produce } from "immer";

import { InjectionToken } from "@/constants/injectionToken";

@injectable()
export class GameService implements IGameService {
  constructor(
    @inject(InjectionToken.IHistoryService)
    private _historyService: IHistoryService,
    @inject(InjectionToken.IGameStore) private _store: StoreType<IGameStore>,
    @inject(InjectionToken.IGameApiService)
    private _gameApiService: IGameApiService
  ) {}

  public changePath(): void {
    this._historyService.push("/test");
  }

  public flipCard(cardId: number): void {
    this._store.setState(
      produce<IGameStore>((state) => {
        state.cards = state.cards.map((card) =>
          card.id === cardId ? { ...card, active: !card.active } : card
        );
      })
    );
  }

  public async fetchCards(): Promise<void> {
    try {
      this._store.setState(
        produce<IGameStore>((state) => {
          state.cardsFetching = true;
        })
      );

      const cards = await this._gameApiService.getCards();

      this._store.setState(
        produce<IGameStore>((state) => {
          state.cards = cards;
          state.cardsFetching = false;
        })
      );
    } catch (e) {}
  }
}
