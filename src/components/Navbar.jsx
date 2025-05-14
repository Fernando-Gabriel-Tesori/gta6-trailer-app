import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">Sobre</StyledLink>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: #1a1a2e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  color: #ff00cc;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: 0.3s;

  &:hover {
    color: #cc33ff;
  }
`;