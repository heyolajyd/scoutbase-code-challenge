import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  padding: 26px 50px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  display: flex;
`;

const NavItem = styled.div`
  margin: 0 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/countries">Countries</Link>
          </NavItem>
        </NavLeft>
      </NavHeader>
    </Nav>
  );
};

export default Navbar;
