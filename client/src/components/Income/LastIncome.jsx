import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import FoodIcon from "../../images/icons/food.png";
import GiftIcon from "../../images/icons/gift.png";
import HealthIcon from "../../images/icons/health.png";
import HomeIcon from "../../images/icons/home.png";
import LeisureIcon from "../../images/icons/leisure.png";
import ShoppingIcon from "../../images/icons/shopping.png";
import TransportIcon from "../../images/icons/transport.png";
import CardIcon from "../../images/icons/card.png";
import CashIcon from "../../images/icons/cash.png";
import SavingsIcon from "../../images/icons/savings.png";

export default function LastIncome() {
  const style = makeStyles({
    income: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
    },
    incomeInfo: {
      marginRight: "24px",
      minWidth: "124px",
    },
    date: {
      color: "var(--main-grey)",
      fontSize: "0.8em",
      marginBottom: "4px",
    },
    incomeName: {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
    amount: {
      color: "var(--main-black)",
      fontWeight: "bold",
      fontSize: "1.5em",
      marginRight: "24px",
      minWidth: "160px",
    },
    accountInfo: {
      marginRight: "32px",
    },
    accountIcon: {
      width: "56px",
    },
    accountName: {
      textAlign: "center",
      fontSize: "0.8em",
      color: "var(--main-grey)",
    },
  })();

  return (
    <div className="widget">
      <h2>Last income</h2>

      {/* Single income */}
      <div className={style.income}>
        <div className={style.accountInfo}>
          <img className={style.accountIcon} src={CardIcon} alt="" />
          <p className={style.accountName}>Card</p>
        </div>
        <div className={style.incomeInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.incomeName}>Gift</p>
        </div>
        <p className={style.amount}>+$100</p>
      </div>

      {/* Single income */}
      <div className={style.income}>
        <div className={style.accountInfo}>
          <img className={style.accountIcon} src={CardIcon} alt="" />
          <p className={style.accountName}>Card</p>
        </div>
        <div className={style.incomeInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.incomeName}>Gift</p>
        </div>
        <p className={style.amount}>+$100</p>
      </div>
    </div>
  );
}
