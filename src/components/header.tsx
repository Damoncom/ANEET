import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #f8f8f8;
  padding: 10px;
`;

const Header: React.FC = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/mi-espacio">Mi Espacio</Link>
    <Link to="/herramientas">Herramientas</Link>
  </Nav>
);

export default Header;
