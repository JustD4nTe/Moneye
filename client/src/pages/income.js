import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import LastIncome from "../components/Income/LastIncome";

export default function Income() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  return (
    <div className={style.main}>
      <h1>Income</h1>
      <div className={`${style.widgets} widgets-container`}>
        <LastIncome />
        <LastIncome />
        <LastIncome />
      </div>
    </div>
  );
}
