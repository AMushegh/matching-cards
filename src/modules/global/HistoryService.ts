import { BrowserHistory, createBrowserHistory } from "history";
import { injectable } from "tsyringe";

@injectable()
export class HistoryService implements IHistoryService {
  private _history: BrowserHistory;

  constructor() {
    this._history = createBrowserHistory();
  }

  public push(url: string | Partial<IHistoryServiceURL>): void {
    this._history.push(url);
  }
}
