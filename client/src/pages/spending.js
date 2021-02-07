import React from "react";
import "../App.css";
import LastSpending from "../components/Spending/LastSpending";
import AddSpending from "../components/Spending/AddSpending";
import ByCategoryPie from "../components/Spending/ByCategoryPie";
import httpClient from "../services/httpClient";
import { Grid } from "@material-ui/core";

export default function Spending() {
  const [data, setData] = React.useState({
    history: [],
    spendingByCategory: [],
  });

  React.useEffect(() => {
    (async () => {
      await httpClient
        .GetDataForSpendingPage()
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <Grid container item sm spacing={2}>
      <Grid item xs={12}>
        <h1>Spending</h1>
      </Grid>
      <Grid container item md spacing={3}>
        <Grid item xl>
          <LastSpending history={data.history} />
        </Grid>
        <Grid item lg>
          {/* Spending by category */}
          <ByCategoryPie spendingByCategory={data.spendingByCategory} />
        </Grid>
        <Grid item md={3}>
          <AddSpending />
        </Grid>
      </Grid>
    </Grid>
  );
}
