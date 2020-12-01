import React from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

function Nav() {

  return (
    <div>
        <Menu>
          <Menu.Item header as={NavLink} to="/" active="false">
          </Menu.Item>

          <Menu.Item as={NavLink} to="" name="My Top Artists" />


          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
            >
            </Menu.Item>
            <Menu.Item>
              <Link to="/">
                <Button primary>Log Out</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    </div>
  );
}

export default withRouter(Nav);