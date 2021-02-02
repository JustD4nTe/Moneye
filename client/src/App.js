import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview";
import Income from "./pages/income";
import Statistics from "./pages/statistics";
import Card from "./pages/card";
import Cash from "./pages/cash";
import Savings from "./pages/savings";
import Spendings from "./pages/spendings";
import { LINKS } from "./Constants";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path={LINKS.OVERVIEW} exact component={Overview} />
          <Route path={LINKS.SPENDINGS} exact component={Spendings} />
          <Route path={LINKS.INCOME} exact component={Income} />
          <Route path={LINKS.STATISTICS} exact component={Statistics} />
          <Route path={LINKS.CARD} exact component={Card} />
          <Route path={LINKS.CASH} exact component={Cash} />
          <Route path={LINKS.SAVINGS} exact component={Savings} />
        </Switch>
      </div>
    </Router>
  );
}
