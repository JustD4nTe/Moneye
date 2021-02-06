import React from "react";
import "../App.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";

export default function SpendingIncomeLastDays(props) {
  const style = makeStyles({
    amountInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    info: {
      color: "var(--main-grey)",
      paddingRight: "32px",
    },
    amount: {
      color: "var(--main-black)",
      fontWeight: "bold",
      fontSize: "1.4em",
    },
    spending: {
      color: "var(--main-red)",
    },
    income: {
      color: "var(--main-green)",
    },
  })();

  const [values, setValues] = React.useState({
    spending: 0,
    income: 0,
    balance: 0,
  });

  React.useEffect(() => {
    setValues(props.values);
  }, [props.values]);

  return (
    <div className="widget">
      <h2>Last {props.days} days</h2>

      {/* Spending */}
      <div className={style.amountInfo}>
        <p className={style.info}>All spending</p>
        <p className={`${style.amount} ${style.spending}`}>
          <span className={style.unit}>$</span>
          {values.spending}
        </p>
      </div>

      {/* Income */}
      <div className={style.amountInfo}>
        <p className={style.info}>All income</p>
        <p className={`${style.amount} ${style.income}`}>
          <span className={style.unit}>$</span>
          {values.income}
        </p>
      </div>

      {/* All - balance: income - spending */}
      <div className={style.amountInfo}>
        <p className={style.info}>Balance</p>
        <p className={style.amount}>
          <span className={style.unit}>$</span>
          {Number(values.balance).toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}
