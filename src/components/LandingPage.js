import React from "react";
import {
  Button,
  Header,
  Container,
} from "semantic-ui-react";
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
        <Container textAlign = "center">
          <Header>
            Please login with Spotify to get started!
          </Header>
              <Button primary onClick = {getSpotifyUserLogin}>Sign In</Button>
        </Container>
      </div>
  );
}

export default withRouter(LandingPage);
