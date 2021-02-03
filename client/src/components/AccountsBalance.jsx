import React from "react";
import "../App.css";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import CardIcon from "../images/icons/card.png";
import CashIcon from "../images/icons/cash.png";
import SavingsIcon from "../images/icons/savings.png";

export default function AccountsBalance() {
  const style = makeStyles({
    accountInfo: {
      display: "flex",
      alignItems: "center",
      marginTop: "16px",
    },
    icon: {
      width: "48px",
      marginRight: "16px",
    },
    accountName: {
      color: "var(--main-grey)",
      fontSize: "0.9em",
    },
    accountAmount: {
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  })();

  return (
    <div className="widget">
      <h2>Accounts</h2>

      {/* Card */}
      <div className={style.accountInfo}>
        <img className={style.icon} src={CardIcon} alt="" />
        <div>
          <p className={style.accountName}>Card</p>
          <p className={style.accountAmount}>
            <span className={style.unit}>$</span>3240.56
          </p>
        </div>
      </div>

      {/* Cash */}
      <div className={style.accountInfo}>
        <img className={style.icon} src={CashIcon} alt="" />
        <div>
          <p className={style.accountName}>Cash</p>
          <p className={style.accountAmount}>
            <span className={style.unit}>$</span>40.06
          </p>
        </div>
      </div>

      {/* Savings */}
      <div className={style.accountInfo}>
        <img className={style.icon} src={SavingsIcon} alt="" />
        <div>
          <p className={style.accountName}>Savings</p>
          <p className={style.accountAmount}>
            <span className={style.unit}>$</span>29003.54
          </p>
        </div>
      </div>
    </div>
  );
}
