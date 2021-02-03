import React from "react";
import "../App.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";

export default function SpendingsIncomeLastDays() {
  const style = makeStyles({
    amountInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "16px",
    },
    info: {
      color: "var(--main-grey)",
      paddingRight: "32px",
      fontSize: "0.9em",
    },
    amount: {
      color: "var(--main-black)",
      fontWeight: "bold",
      fontSize: "1.2em",
    },
    spendings: {
      color: "var(--main-red)",
    },
    income: {
      color: "var(--main-green)",
    },
  })();

  return (
    <div className="widget">
      <h2>Last 30 days</h2>
      <div className={style.amountInfo}>
        <p className={style.info}>All spendings</p>
        <p className={`${style.amount} ${style.spendings}`}>
          <span className={style.dollar}>$</span>
          200.42
        </p>
      </div>
      <div className={style.amountInfo}>
        <p className={style.info}>All income</p>
        <p className={`${style.amount} ${style.income}`}>
          <span className={style.dollar}>$</span>3400
        </p>
      </div>
      <div className={style.amountInfo}>
        <p className={style.info}>Balance</p>
        <p className={style.amount}>
          <span className={style.dollar}>$</span>12456.58
        </p>
      </div>
    </div>
  );
}
