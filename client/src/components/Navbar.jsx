import React from "react";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core/";

export default function Navigation() {
  const style = makeStyles({
    navLinks: {
      display: "flex",
      flexDirection: "column",
    },
    link: {
      textDecoration: "none",
      color: "black",
      marginLeft: "40px",
      marginTop: "24px",
    },
    accounts: {
      marginLeft: "40px",
      marginTop: "40px",
      fontSize: "0.8em",
      color: "#767676",
    },
  })();

  return (
    <div className="navbar">
      {/* Logo */}

      <NavLink exact to="/" className={style.link}>
        MONEYE
      </NavLink>

      {/* Categories */}
      <Box className={style.navLinks}>
        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Overview
        </NavLink>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Expenses
        </NavLink>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Income
        </NavLink>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Statistics
        </NavLink>

        {/* Accounts */}
        <span className={style.accounts}>Accounts</span>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Card
        </NavLink>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Cash
        </NavLink>

        <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
          Savings
        </NavLink>
      </Box>
    </div>
  );
}
