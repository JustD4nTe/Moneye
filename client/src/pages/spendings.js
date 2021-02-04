import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import LastSpending from "../components/Spending/LastSpending";

export default function Spendings() {
  const style = makeStyles({
    widgets: {
      display: "flex",
    },
  })();

  return (
    <div>
      <h1>Spendings</h1>
      <div className={`${style.widgets} widgets-container`}>
        <LastSpending />
        <LastSpending />      
        <LastSpending />
      </div>
    </div>
  );
}
