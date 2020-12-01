import React from "react";
import { Button } from '@material-ui/core';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function LandingPage() {

  const getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/api/login")
    .then((response) => response.text())
    .then(response => {
      window.location.replace(response);
    })
  }

  return (
      <div style={{ marginTop: "250px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1>
            Please login with Spotify to get started!
          </h1>
              <Button variant = "contained" color = "primary" onClick = {getSpotifyUserLogin}>Sign In</Button>
      </div>
  );
}

export default withRouter(LandingPage);
