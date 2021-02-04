import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import ByCategoryPie from "../components/Spending/ByCategoryPie";
import ByDayBar from "../components/Income/ByDayBar";
import AccountAmount from "../components/AccountAmount";
import httpClient from "../services/httpClient";

export default function Cash() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  const [data, setData] = React.useState({
    balance: { name: "", value: 0 },
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
      <div className={style.widgets}>
        <AccountAmount amount={data.balance.value} title={data.balance.name} />
        <ByCategoryPie spendingByCategory={data.spendingByCategory} />
        <ByDayBar incomeByDays={data.incomeByDays} />
      </div>
    </div>
  );
}
