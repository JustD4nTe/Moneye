import React from "react";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core/";
import { LINKS } from "../Constants";

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
      cursor: "pointer",
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

      <NavLink exact to={LINKS.OVERVIEW} className={style.link}>
        MONEYE
      </NavLink>

      {/* Categories */}
      <Box className={style.navLinks}>
        <NavLink
          exact
          to={LINKS.OVERVIEW}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Overview
        </NavLink>

        <NavLink
          exact
          to={LINKS.SPENDINGS}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Spendings
        </NavLink>

        <NavLink
          exact
          to={LINKS.INCOME}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Income
        </NavLink>

        <NavLink
          exact
          to={LINKS.STATISTICS}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Statistics
        </NavLink>

        {/* Accounts */}
        <span className={style.accounts}>Accounts</span>

        <NavLink
          exact
          to={LINKS.CARD}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Card
        </NavLink>

        <NavLink
          exact
          to={LINKS.CASH}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Cash
        </NavLink>

        <NavLink
          exact
          to={LINKS.SAVINGS}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Savings
        </NavLink>
      </Box>
    </div>
  );
}
