import { InjectionToken } from "@/constants/injection-token";
import { produce } from "immer";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject(InjectionToken.IAuthStore)
    private _authStore: StoreType<IAuthStore>,
    @inject(InjectionToken.IHistoryService)
    private _historyService: IHistoryService
  ) {}

  login(): void {
    this._authStore.setState(
      produce<IAuthStore>((state) => {
        state.isLoggedIn = true;
      })
    );

    this._historyService.replace("/");
  }
}
