import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            {
              return props.user === null ? <LandingPage /> : <UserDashboard />;
            }
          }}
        />
        <Route
          exact
          path="/login"
          render={() =>
            props.user === null ? <LoginForm /> : <Redirect to="/" />
          }
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
