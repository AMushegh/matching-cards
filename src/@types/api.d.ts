interface IApiService {
  makeRequest<T>(type: RequestMethodType, url: string): Promise<T>;
}

type RequestMethodType = "get" | "post" | "delete" | "put";
