import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #1a1a1a;
  padding: 1rem 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #f0a500;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <StyledLink to='/'>Início</StyledLink>
      <StyledLink to='/about'>Sobre</StyledLink>
    </Nav>
  )
}
