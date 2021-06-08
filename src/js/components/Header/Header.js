import styled, { css } from "styled-components";
import logo from "../../../assets/animal-logo.png";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

const StyledHeader = styled.div`
  height: 13vh;
  background-color: #ff4f58ff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
`;

const Links = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: black;
  }
`;

function Header() {
  return (
   
      <StyledHeader>
        <Links className="links">
          <NavLink activeClassName="active-link" to="/about">ABOUT ME</NavLink>
          <NavLink activeClassName="active-link" exact to="/">IMAGE GALLERY</NavLink>
        </Links>
        <div className="logo-title">
          <img
            style={{ borderRadius: "50%", height: "5em" }}
            src={logo}
            alt="animal logo"
          />
        </div>
      </StyledHeader>
   
  );
}

export default Header;
