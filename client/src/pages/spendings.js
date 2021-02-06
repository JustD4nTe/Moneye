import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import LastSpending from "../components/Spending/LastSpending";
import AddSpending from "../components/Spending/AddSpending";
import httpClient from "../services/httpClient";

export default function Spendings() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  const [data, setData] = React.useState({
    history: [],
  });

  React.useEffect(() => {
    (async () => {
      await httpClient
        .GetDataForSpendingPage()
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <div>
      <h1>Spendings</h1>
      <div className={`${style.widgets} widgets-container`}>
        <AddSpending />
        <LastSpending history={data.history} />
        <LastSpending history={data.history} />
      </div>
    </div>
  );
}
