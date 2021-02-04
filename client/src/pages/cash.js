import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import ByCategoryPie from "../components/Spending/ByCategoryPie";
import ByDayBar from "../components/Income/ByDayBar";
import httpClient from "../services/httpClient";

export default function Cash() {
  const style = makeStyles({})();

  const [data, setData] = React.useState({
    incomeByDays: [],
    spendingByCategory: [],
  });

  React.useEffect(() => {
    (async () => {
      await httpClient
        .GetDataForAccountPage({ accountName: "Cash" })
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <div className={style.main}>
      <h1>Cash</h1>
      {console.log(data)}
      <ByCategoryPie spendingByCategory={data.spendingByCategory} />
      <ByDayBar incomeByDays={data.incomeByDays} />
    </div>
  );
}
