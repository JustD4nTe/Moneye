import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import LastIncome from "../components/Income/LastIncome";
import AddIncome from "../components/Income/AddIncome";
import httpClient from "../services/httpClient";

export default function Income() {
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
        .GetDataForIncomePage()
        .then((resp) => setData(resp.data));
    })();
  }, []);

  return (
    <div className={style.main}>
      <h1>Income</h1>
      <div className={`${style.widgets} widgets-container`}>
        <AddIncome />
        <LastIncome history={data.history} />
        <LastIncome history={data.history} />
      </div>
    </div>
  );
}
