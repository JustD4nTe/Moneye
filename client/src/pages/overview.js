import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import SpendingIncomeLastDays from "../components/SpendingIncomeLastDays";
import AccountsBalance from "../components/Overview/AccountsBalance";
import AccountAmount from "../components/AccountAmount";
import httpClient from "../services/httpClient";

export default function Overview() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  const [data, setData] = React.useState({
    last30days: {},
    last7days: {},
    accountAmount: 0,
    balance: [],
  });

  React.useEffect(() => {
    (async () =>
      await httpClient
        .GetDataForOverviewPage()
        .then((resp) => setData(resp.data)))();
  }, []);

  return (
    <div className={style.main}>
      <h1>Overview</h1>
      <div className={`${style.widgets} widgets-container`}>
        {/* Sum of all accounts' balance */}
        <AccountAmount amount={data.accountAmount} title={"All accounts"} />
        {/* Account balance for each account */}
        <AccountsBalance balance={data.balance} />
        {/* Last 7 days */}
        <SpendingIncomeLastDays values={data.last7days} days={7} />
        {/* Last 30 days */}
        <SpendingIncomeLastDays values={data.last30days} days={30} />
      </div>
    </div>
  );
}
