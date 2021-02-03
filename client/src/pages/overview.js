import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";

export default function Overview() {
  const style = makeStyles({})();

  return (
    <div className={style.main}>
      <h1>Overview</h1>
    </div>
  );
}
