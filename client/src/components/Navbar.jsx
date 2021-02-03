import React from "react";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core/";
import { LINKS } from "../Constants";
import Logo from "../images/logo_moneye_title.png";
import CardIcon from "../images/icons/card.png";
import CashIcon from "../images/icons/cash.png";
import SavingsIcon from "../images/icons/savings.png";

export default function Navigation() {
  const style = makeStyles({
    logo: {
      maxWidth: "100%",
      padding: "24px",
      boxSizing: "border-box",
    },
    navLinks: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "black",
      marginLeft: "40px",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
    },
    activeLink: {
      color: "var(--main-color)",
    },
    accounts: {
      marginLeft: "40px",
      marginTop: "40px",
      marginBottom: "8px",
      fontSize: "0.7em",
      color: "var(--main-grey)",
    },
    icon: {
      paddingRight: "8px",
      cursor: "pointer",
      width: "24px",
    },
  })();

  return (
    <div className="navbar">
      {/* Logo */}

      <NavLink exact to={LINKS.OVERVIEW}>
        <img className={style.logo} src={Logo} alt="Moneye app logo" />
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
          <img className={style.icon} src={CardIcon} alt="" />
          Card
        </NavLink>

        <NavLink
          exact
          to={LINKS.CASH}
          className={style.link}
          activeClassName={style.activeLink}
        >
          <img className={style.icon} src={CashIcon} alt="" />
          Cash
        </NavLink>

        <NavLink
          exact
          to={LINKS.SAVINGS}
          className={style.link}
          activeClassName={style.activeLink}
        >
          <img className={style.icon} src={SavingsIcon} alt="" />
          Savings
        </NavLink>
      </Box>
    </div>
  );
}
