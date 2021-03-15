import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import AwarenessPage from "./components/pages/AwarenessPage";
import GuidePage from "./components/pages/GuidePage";
import SignupPage from "./components/pages/SignupPage";
import AuthProvider from "./contexts/AuthContext";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/home/:url">
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
                    <Route path="/signup">
                        <SignupPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
