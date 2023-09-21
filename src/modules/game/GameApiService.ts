import { InjectionToken } from "@/constants/injection-token";
import { injectable, inject } from "tsyringe";

@injectable()
export class GameApiService implements IGameApiService {
  constructor(
    @inject(InjectionToken.IApiService) private _apiService: IApiService
  ) {}

  public async getCards() {
    return this._apiService.makeRequest<ICard[]>(RequestMethod.GET, "/cards");
  }
}
