import styled from "styled-components";
import logo from "../../../assets/animal-logo.png";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.div`
  height: 12vh;
  background-color: #d2691e; 
  width: 100%;
  display: flex;
  color:white;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
      border-bottom: 4px black solid;
`;

const Links = styled.div`
  width: 35vw;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: white;
    font-weight:bold;
    font-size:17px;
    margin:1em;
    
  }
`;

function Header() {
  return (
   
      <StyledHeader>
        <Links className="links">
          <NavLink activeClassName="active-link" to="/about">ABOUT</NavLink>
          <NavLink activeClassName="active-link" exact to="/">GALLERY</NavLink>
        </Links>
        <div className="logo-title">
          <img
            style={{ borderRadius: "50%", height: "3em" }}
            src={logo}
            alt="animal logo"
          />
        </div>
      </StyledHeader>
   
  );
}

export default Header;
