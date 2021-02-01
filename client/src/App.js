import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview";
import Expenses from "./pages/expenses";
import Income from "./pages/income";
import Statistics from "./pages/statistics";
import Card from "./pages/card";
import Cash from "./pages/cash";
import Savings from "./pages/savings";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Overview} />
          <Route path="/expenses" exact component={Expenses} />
          <Route path="/income" exact component={Income} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/card" exact component={Card} />
          <Route path="/cash" exact component={Cash} />
          <Route path="/savings" exact component={Savings} />
        </Switch>
      </div>
    </Router>
  );
}
