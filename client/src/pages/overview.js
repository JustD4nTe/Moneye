import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import SpendingsIncomeLastDays from "../components/Overview/SpendingsIncomeLastDays";
import AccountsBalance from "../components/Overview/AccountsBalance";

export default function Overview() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  return (
    <div className={style.main}>
      <h1>Overview</h1>
      <div className={`${style.widgets} widgets-container`}>
      <SpendingsIncomeLastDays />
      <SpendingsIncomeLastDays />
      <AccountsBalance/>
      <AccountsBalance/>

      </div>
      
    </div>
  );
}
