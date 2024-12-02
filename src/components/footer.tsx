import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #f8f8f8;
`;

const Footer: React.FC = () => (
  <FooterContainer>© 2024 My Gatsby Site</FooterContainer>
);

export default Footer;
