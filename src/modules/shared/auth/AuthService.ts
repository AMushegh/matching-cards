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

  public setAuthStateOnAppReady(): void {
    const isLogedin = Boolean(window.localStorage.getItem("logedIn"));
    if (isLogedin) {
      this._authStore.setState(
        produce<IAuthStore>((state) => {
          state.isLoggedIn = true;
        })
      );
    }
  }

  public login(): void {
    this._authStore.setState(
      produce<IAuthStore>((state) => {
        state.isLoggedIn = true;
      })
    );
    window.localStorage.setItem("logedIn", "true");

    this._historyService.replace("/");
  }
}
