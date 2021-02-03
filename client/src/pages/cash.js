import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";

export default function Cash() {
  const style = makeStyles({})();

  return (
    <div className={style.main}>
      <h1>Cash</h1>
    </div>
  );
}
