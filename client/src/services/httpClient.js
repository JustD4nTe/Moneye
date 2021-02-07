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

  GetDataForSpendingPage() {
    return this.httpClient.get("/spending");
  }

  GetDataForIncomePage() {
    return this.httpClient.get("/income");
  }

  AddSpending(params) {
    return this.httpClient.post("/spending", params);
  }

  AddIncome(params) {
    return this.httpClient.post("/income", params);
  }
}

export default new HttpClient();
