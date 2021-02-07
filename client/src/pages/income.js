import "../App.css";
import React from "react";
import LastIncome from "../components/Income/LastIncome";
import AddIncome from "../components/Income/AddIncome";
import ByDayBar from "../components/Income/ByDayBar";
import httpClient from "../services/httpClient";
import { Grid } from "@material-ui/core";

export default function Income() {
  const [data, setData] = React.useState({
    history: [],
    incomeByDays: [],
  });

  React.useEffect(() => {
    (async () => {
      await httpClient
        .GetDataForIncomePage()
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <Grid container item sm spacing={2}>
      <Grid item xs={12}>
        <h1>Income</h1>
      </Grid>

      <Grid container item md spacing={3}>
        <Grid item xl={4}>
          <LastIncome history={data.history} />
        </Grid>

        <Grid item xl={4}>
          {/* Income by day */}
          <ByDayBar incomeByDays={data.incomeByDays} />
        </Grid>
        <Grid item md={4}>
          <AddIncome />
        </Grid>
      </Grid>
    </Grid>
  );
}
