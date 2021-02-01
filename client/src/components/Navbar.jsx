import React from "react";
import "../App.css";
import "../index.css";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core/";

export default function Navigation(props) {
  const style = makeStyles({
    link: {
        textDecoration: "none",
        color: "black"
    }
  })();

  return (
    <div className="header-menu">
      {/* Logo */}
      <Box>
        <NavLink exact to="/" className={style.link}>
          MONEYE
        </NavLink>
      </Box>

      {/* Categories */}
      <Box className={style.navLinks}>
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Overview
          </NavLink>
        </Box>
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Expenses
          </NavLink>
        </Box>
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Income
          </NavLink>
        </Box>

        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Statistics
          </NavLink>
        </Box>

        {/* Accounts */}
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Card
          </NavLink>
        </Box>
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Cash
          </NavLink>
        </Box>
        <Box>
          <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
            Savings
          </NavLink>
        </Box>
      </Box>
    </div>
  );
}
