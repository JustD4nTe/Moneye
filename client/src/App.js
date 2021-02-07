import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview";
import Income from "./pages/income";
import Statistics from "./pages/statistics";
import Account from "./pages/account";
import Spending from "./pages/spending";
import { LINKS } from "./Constants";
import { Grid } from "@material-ui/core";

export default function App() {
  return (
    <Router>
      <Grid container item xs>
        <Grid item xs={1.2}>
          <Navbar />
        </Grid>
        <Grid item xs className="App">
          <Switch>
            <Route path={LINKS.OVERVIEW} exact component={Overview} />
            <Route path={LINKS.SPENDING} exact component={Spending} />
            <Route path={LINKS.INCOME} exact component={Income} />
            <Route path={LINKS.STATISTICS} exact component={Statistics} />
            <Route path={LINKS.ACCOUNT} component={Account} />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}
