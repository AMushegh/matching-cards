import { InjectionToken } from "@/constants/injectionToken";
import { inject, injectable } from "tsyringe";

@injectable()
export class GameController implements IGameController {
  constructor(
    @inject(InjectionToken.IGameService) private _gameService: IGameService
  ) {}

  public addButtonClicked = () => {
    this._gameService.addCard();
  };

  public changePathButtonClicked = () => {
    this._gameService.changePath();
  };
}
