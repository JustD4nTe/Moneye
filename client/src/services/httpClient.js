import axios from "axios";
import { URL_API } from "../Constants";

class HttpClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: URL_API,
    });
  }

  GetDataForAccountPage(params) {
    return this.httpClient.get("/account", { params });
  }
}

export default new HttpClient();
