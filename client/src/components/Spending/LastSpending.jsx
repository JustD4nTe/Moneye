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

export default function LastSpending() {
  const style = makeStyles({
    spending: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
    },
    category: {
      marginRight: "32px",
    },
    categoryName: {
      textAlign: "center",
      fontSize: "0.8em",
      color: "var(--main-grey)",
    },
    categoryIcon: {
      width: "56px",
    },
    spendingInfo: {
      marginRight: "24px",
      minWidth: "124px",
    },
    date: {
      color: "var(--main-grey)",
      fontSize: "0.8em",
      marginBottom: "4px",
    },
    spendingName: {
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
      display: "flex",
      alignItems: "center",
    },
    accountIcon: {
      width: "32px",
      marginRight: "4px",
    },
    accountName: {
      textAlign: "center",
      fontSize: "0.8em",
      color: "var(--main-grey)",
    },
  })();

  return (
    <div className="widget">
      <h2>Last spending</h2>

      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={FoodIcon} alt="" />
          <p className={style.categoryName}>Food</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Groceries</p>
        </div>
        <p className={style.amount}>-$123824.78</p>
        <div className={style.accountInfo}>
          <img className={style.accountIcon} src={CardIcon} alt="" />
          <p className={style.accountName}>Card</p>
        </div>
      </div>

      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={TransportIcon} alt="" />
          <p className={style.categoryName}>Transport</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Bus ticket</p>
        </div>
        <p className={style.amount}>-$56</p>
        <div className={style.accountInfo}>
          <img className={style.accountIcon} src={CashIcon} alt="" />
          <p className={style.accountName}>Cash</p>
        </div>
      </div>

      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={ShoppingIcon} alt="" />
          <p className={style.categoryName}>Shopping</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Clothes</p>
        </div>
        <p className={style.amount}>-$233.43</p>
        <div className={style.accountInfo}>
          <img className={style.accountIcon} src={CardIcon} alt="" />
          <p className={style.accountName}>Card</p>
        </div>
      </div>
    </div>
  );
}
