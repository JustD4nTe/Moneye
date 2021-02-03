import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";

export default function AccountsBalance() {
  const style = makeStyles({
    amount: {
      fontWeight: "bold",
      fontSize: "2.5em",
      color: "var(--main-color)",
    },
  })();

  return (
    <div className="widget">
      <h2>All accounts</h2>
      <p className={style.amount}>
        <span className={style.unit}>$</span>
        45671.92
      </p>
    </div>
  );
}
