import axios, { AxiosInstance } from "axios";

export class ApiService implements IApiService {
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create();
  }

  public async makeRequest<T>(type: RequestMethodType, url: string) {
    return this._instance[type]<T>(url).then(({ data }) => data);
  }
}
