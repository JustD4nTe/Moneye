import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import SpendingsIncomeLastDays from "../components/Overview/SpendingsIncomeLastDays";
import AccountsBalance from "../components/Overview/AccountsBalance";
import AccountAmount from "../components/Overview/AccountAmount";

export default function Overview() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  const amountTitle = {
    title: "All accounts",
  };

  const number1 = {
    days: "7",
  };

  const number2 = {
    days: "30",
  };
  return (
    <div className={style.main}>
      <h1>Overview</h1>
      <div className={`${style.widgets} widgets-container`}>
        <AccountAmount title={amountTitle.title} />
        <AccountsBalance />
        <SpendingsIncomeLastDays days={number1.days} />
        <SpendingsIncomeLastDays days={number2.days} />
      </div>
    </div>
  );
}
