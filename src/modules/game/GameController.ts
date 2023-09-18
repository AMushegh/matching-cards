import { InjectionToken } from "@/constants/injectionToken";
import { inject, injectable } from "tsyringe";

@injectable()
export class GameController implements IGameController {
  constructor(
    @inject(InjectionToken.IGameService) private _gameService: IGameService
  ) {}

  public changePathButtonClicked = () => {
    this._gameService.changePath();
  };

  public cardClicked = (cardId: number) => {
    this._gameService.flipCard(cardId);
  };

  public gameInitialized = () => {
    this._gameService.fetchCards();
  };
}
