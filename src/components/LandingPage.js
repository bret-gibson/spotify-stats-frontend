import React from "react";
import {
  Image,
  Button,
  Header,
  Container,
  Segment,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function LandingPage(props) {

  // const [loginLink, setLoginLink] = useState("");


  const getSpotifyUserLogin = () => {
    fetch("http://localhost:8080/api/login")
    .then((response) => response.text())
    .then(response => {
      window.location.replace(response);
    })
  }

  return (
    <div style={{ marginBottom: "250px" }}>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <Image style={{ margin: "auto" }} size="small" src="/logo.png"></Image>
        <Container text>
          <Header
            as="h1"
            content="Welcome to Spotify Stats!"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "0.5em",
              color: "white",
            }}
          />
          <Header
            as="h2"
            style={{
              fontSize: "1.7em",
              fontWeight: "normal",
              marginTop: "1.5em",
              color: "white",
            }}
          >
            <ul
              style={{
                alignItems: "center",
                textAlign: "left",
                listStyle: "none",
              }}
            >
              <li>View Your Spotify Stats</li>
            </ul>
          </Header>

          <Segment>
            <h3>Please login with Spotify to get started!</h3>
            {/* <Link to="/login"> */}
              <Button onClick = {getSpotifyUserLogin}>Sign In</Button>
            {/* </Link> */}
          </Segment>
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

// export default withRouter(connect(mapStateToProps)(LandingPage));

export default withRouter(LandingPage);
