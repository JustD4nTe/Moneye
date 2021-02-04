import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import CardIcon from "../../images/icons/card.png";

export default function LastSpending() {
  const style = makeStyles({
    spending: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
    },
    category: {
      marginRight: "24px",
    },
    categoryName: {
      textAlign: "center",
      fontSize: "0.9em",
      color: "var(--main-grey)",
    },
    amount: {
      color: "var(--main-black)",
      fontWeight: "bold",
      fontSize: "1.5em",
    },
    categoryIcon: {
      width: "56px",
    },
    spendingInfo: {
      marginRight: "24px",
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
  })();

  return (
    <div className="widget">
      <h2>Last spending</h2>

      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={CardIcon} alt="" />
          <p className={style.categoryName}>Food</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Groceries</p>
        </div>
        <p className={style.amount}>-$24.78</p>
      </div>

      
      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={CardIcon} alt="" />
          <p className={style.categoryName}>Food</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Groceries</p>
        </div>
        <p className={style.amount}>-$24.78</p>
      </div>

      
      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={CardIcon} alt="" />
          <p className={style.categoryName}>Food</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Groceries</p>
        </div>
        <p className={style.amount}>-$24.78</p>
      </div>

      
      {/* Single spending */}
      <div className={style.spending}>
        <div className={style.category}>
          <img className={style.categoryIcon} src={CardIcon} alt="" />
          <p className={style.categoryName}>Food</p>
        </div>
        <div className={style.spendingInfo}>
          <p className={style.date}>04/02/2021</p>
          <p className={style.spendingName}>Groceries</p>
        </div>
        <p className={style.amount}>-$24.78</p>
      </div>
    </div>
  );
}
