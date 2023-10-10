import { BrowserHistory } from "history";
import { injectable } from "tsyringe";

import { history } from "@history";

@injectable()
export class HistoryService implements IHistoryService {
  private _history: BrowserHistory;

  constructor() {
    this._history = history;
  }

  public push(url: string | Partial<IHistoryServiceURL>): void {
    this._history.push(url);
  }

  public replace(url: string): void {
    this._history.replace(url);
  }
}
