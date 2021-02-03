import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";

export default function AccountAmount(props) {
  const style = makeStyles({
    amount: {
      fontWeight: "bold",
      fontSize: "4em",
      color: "var(--main-color)",
      marginTop: "56px",
    },
  })();

  return (
    <div className="widget">
      <h2>{props.title}</h2>
      <p className={style.amount}>
        <span className={style.unit}>$</span>
        45671.92
      </p>
    </div>
  );
}
