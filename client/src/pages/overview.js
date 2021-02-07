import React from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import SpendingIncomeLastDays from "../components/SpendingIncomeLastDays";
import AccountsBalance from "../components/Overview/AccountsBalance";
import AccountAmount from "../components/AccountAmount";
import httpClient from "../services/httpClient";

export default function Overview() {
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
    <Grid container item sm spacing={2}>
      <Grid item xs={12}>
        <h1>Overview</h1>
      </Grid>
      <Grid container item md spacing={3}>
        <Grid item lg={3}>
          {/* Sum of all accounts' balance */}
          <AccountAmount amount={data.accountAmount} title={"All accounts"} />
        </Grid>
        <Grid item md={3}>
          {/* Account balance for each account */}
          <AccountsBalance balance={data.balance} />
        </Grid>
        <Grid item md={3}>
          {/* Last 7 days */}
          <SpendingIncomeLastDays values={data.last7days} days={7} />
        </Grid>
        <Grid item md={3}>
          {/* Last 30 days */}
          <SpendingIncomeLastDays values={data.last30days} days={30} />
        </Grid>
      </Grid>
    </Grid>
  );
}
