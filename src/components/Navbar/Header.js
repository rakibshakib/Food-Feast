import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../Hooks/useAuth";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-bg">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/" className="router-link brand-name">
              Food Feast
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link className="router-link" to="/explore">
                  Explore
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link className="router-link" to="/about-us">
                  About Us
                </Link>
              </Nav.Link>
              {user?.email && (
                <NavDropdown
                  title={user?.displayName}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    {" "}
                    <Link className="router-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Button onClick={logout} color="inherit">
                      Logout
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              <Nav.Link href="#">
                {!user?.email && (
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
