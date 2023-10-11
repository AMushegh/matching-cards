import { InjectionToken } from "@/constants/injection-token";
import { inject, injectable } from "tsyringe";

@injectable()
export class AuthController implements IAuthController {
  constructor(
    @inject(InjectionToken.IAuthService) private _authService: IAuthService
  ) {}

  public loginSumbitted = () => {
    this._authService.login();
  };

  public appReady = () => {
    this._authService.setAuthStateOnAppReady();
  };
}
