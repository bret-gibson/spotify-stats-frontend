import React from "react";
import logo from "./logo.svg";
import {Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            {
              return <LandingPage />;
            }
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
