import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import { ACCOUNTS } from "../../Constants";

export default function LastIncome(props) {
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

  const [data, setData] = React.useState([]);

  React.useEffect(() => setData(props.history), [props.history]);

  return (
    <div className="widget">
      <h2>Last income</h2>

      {data.map((x, i) => (
        <div className={style.income} key={i}>
          <div className={style.accountInfo}>
            <img
              className={style.accountIcon}
              src={ACCOUNTS.find((y) => y.name === x.accountName).icon}
              alt=""
            />
            <p className={style.accountName}>{x.accountName}</p>
          </div>
          <div className={style.incomeInfo}>
            <p className={style.date}>{x.date}</p>
            <p className={style.incomeName}>{x.name}</p>
          </div>
          <p className={style.amount}>+${x.value}</p>
        </div>
      ))}
    </div>
  );
}
