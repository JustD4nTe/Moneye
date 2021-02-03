import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import SpendingsIncomeLastDays from "../components/SpendingsIncomeLastDays";
import AccountsBalance from "../components/AccountsBalance";

export default function Overview() {
  const style = makeStyles({})();

  return (
    <div className={style.main}>
      <h1>Overview</h1>
      <SpendingsIncomeLastDays />
      {/* <SpendingsIncomeLastDays /> */}
      <AccountsBalance/>
      
    </div>
  );
}
