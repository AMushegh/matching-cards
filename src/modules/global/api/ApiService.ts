import axios, { AxiosInstance } from "axios";

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    // TODO: configure instance
    this.instance = axios.create();
  }
}
