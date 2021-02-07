import React from "react";
import "../../App.css";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import { ACCOUNTS, CATEGORIES } from "../../Constants";
import { List } from "@material-ui/core";

export default function LastSpending(props) {
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

  const [data, setData] = React.useState([]);

  React.useEffect(() => setData(props.history), [props.history]);

  return (
    <div className="widget">
      <h2>Last spending</h2>

      <List style={{ maxHeight: "480px", overflow: "auto" }}>
        {data.map((x, i) => (
          <div className={style.spending} key={i}>
            <div className={style.category}>
              <img
                className={style.categoryIcon}
                src={CATEGORIES.find((y) => y.value === x.category).icon}
                alt=""
              />
              <p className={style.categoryName}>{x.category}</p>
            </div>
            <div className={style.spendingInfo}>
              <p className={style.date}>{x.date}</p>
              <p className={style.spendingName}>{x.name}</p>
            </div>
            <p className={style.amount}>-${x.value}</p>
            <div className={style.accountInfo}>
              <img
                className={style.accountIcon}
                src={ACCOUNTS.find((y) => y.name === x.accountName).icon}
                alt=""
              />
              <p className={style.accountName}>{x.accountName}</p>
            </div>
          </div>
        ))}
      </List>
    </div>
  );
}
