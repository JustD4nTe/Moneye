import React from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import ByCategoryPie from "../components/Spending/ByCategoryPie";
import ByDayBar from "../components/Income/ByDayBar";
import AccountAmount from "../components/AccountAmount";
import SpendingIncomeLastDays from "../components/SpendingIncomeLastDays";
import httpClient from "../services/httpClient";

export default function Cash() {
  const [data, setData] = React.useState({
    balance: { name: "", value: 0 },
    incomeByDays: [],
    spendingByCategory: [],
    last7days: {},
    last30days: {},
  });

  React.useEffect(() => {
    let name = window.location.pathname.split("/")[1];

    (async () => {
      await httpClient
        .GetDataForAccountPage({ accountName: name })
        .then((resp) => setData(resp.data));
    })();
  }, [window.location.pathname]);

  return (
    <Grid container item sm spacing={2}>
      <Grid item xs={12}>
        <h1>Cash</h1>
      </Grid>
      <Grid container item md spacing={3}>
        <Grid item lg={4}>
          {/* Account balance */}
          <AccountAmount
            amount={data.balance.value}
            title={data.balance.name}
          />
        </Grid>
        <Grid item md={4}>
          {/* Last 7 days */}
          <SpendingIncomeLastDays values={data.last7days} days={7} />
        </Grid>
        <Grid item md={4}>
          {/* Last 30 days */}
          <SpendingIncomeLastDays values={data.last30days} days={30} />
        </Grid>
        <Grid item lg={6}>
          {/* Spending by category */}
          <ByCategoryPie spendingByCategory={data.spendingByCategory} />
        </Grid>
        <Grid item lg={6}>
          {/* Income by day */}
          <ByDayBar incomeByDays={data.incomeByDays} />
        </Grid>
      </Grid>
    </Grid>
  );
}
