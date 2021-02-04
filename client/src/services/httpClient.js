import axios from "axios";
import { URL_API } from "../Constants";

class HttpClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: URL_API,
    });
  }

  GetDataForOverviewPage() {
    return this.httpClient.get("/overview");
  }
}

export default new HttpClient();
