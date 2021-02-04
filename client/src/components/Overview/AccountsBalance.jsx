import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import CardIcon from "../../images/icons/card.png";
import CashIcon from "../../images/icons/cash.png";
import SavingsIcon from "../../images/icons/savings.png";

export default function AccountsBalance(props) {
  const style = makeStyles({
    accountInfo: {
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
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

  const [balance, setBalance] = React.useState([{ name: "", balance: 0 }]);

  React.useEffect(() => {
    setBalance(props.balance);
  }, [props.balance]);

  const accountsView = balance.map((acc) => {
    let icon;

    if (acc.name === "Card") icon = CardIcon;
    else if (acc.name === "Cash") icon = CashIcon;
    else icon = SavingsIcon;

    return (
      <div key={acc.name} className={style.accountInfo}>
        <img className={style.icon} src={icon} alt="" />
        <div>
          <p className={style.accountName}>{acc.name}</p>
          <p className={style.accountAmount}>
            <span className={style.unit}>$</span>
            {acc.balance}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="widget">
      <h2>Accounts</h2>
      {accountsView}
    </div>
  );
}
