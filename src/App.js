import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import AwarenessPage from "./components/pages/AwarenessPage";
import GuidePage from "./components/pages/GuidePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/guide">
          <GuidePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/awareness">
          <AwarenessPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
