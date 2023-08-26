import { inject, injectable } from "tsyringe";
import { InjectionToken } from "./constants/injectionToken";

@injectable()
export class Controller implements IController {
  constructor(@inject(InjectionToken.IService) private _service: IService) {}

  public buttonClicked = () => {
    this._service.printHello();
  };
}
