import { Navbar, Nav, Container } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import ThemeToggler from "./ThemeToggler";

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const InternalNavLink = styled(NavLink)`
  font-size: 1.1em;
  font-weight: normal;
  margin: 0.9em 1em;
  color: ${(props) => props.theme.navbarTheme.linkColor};

  &:hover {
    color: white;
  }
  &::after {
    background-color: white;
  }
  &.navbar__link--active {
    color: white;
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  const navBarInfo = {
    logo: {
      source: "images/logo.png",
      height: 45,
      width: 50,
    },
    sections: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Skills",
        href: "/skills",
      },
      {
        title: "Education",
        href: "/education",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      // {
      //   title: "Contact",
      //   href: "/contact",
      // }
    ],
  };

  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={navBarInfo.logo?.source}
            className="d-inline-block align-top"
            alt="main logo"
            style={
              navBarInfo.logo.height && navBarInfo.logo.width
                ? {
                    height: navBarInfo.logo.height,
                    width: navBarInfo.logo.width,
                  }
                : styles.logoStyle
            }
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {navBarInfo.sections.map((section, index) => (
              <InternalNavLink
                key={section.title}
                onClick={() => setExpanded(false)}
                exact={index === 0}
                activeClassName="navbar__link--active"
                className="navbar__link"
                to={section.href}
                theme={theme}
              >
                {section.title}
              </InternalNavLink>
            ))}
          </Nav>
          <ThemeToggler onClick={() => setExpanded(false)} className="theme__toggler"/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
