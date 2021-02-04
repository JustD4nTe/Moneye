import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import ByCategoryPie from "../components/Spending/ByCategoryPie";
import httpClient from "../services/httpClient";

export default function Cash() {
  const style = makeStyles({})();

  const [data, setData] = React.useState({
    spendingByCategory: [],
  });

  React.useEffect(() => {
    (async () => {
      await httpClient
        .GetDataForOverviewPage()
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <div className={style.main}>
      <h1>Cash</h1>
      <ByCategoryPie spendingByCategory={data.spendingByCategory} />
    </div>
  );
}
