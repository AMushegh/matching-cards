interface IHistoryServiceURL {
  pathName: string;
  search: string;
  hash: string;
}

interface IHistoryService {
  push(url: string | Partial<IHistoryServiceURL>): void;
}
