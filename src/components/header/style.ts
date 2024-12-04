import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 201px;
  height: 60px;
  cursor: pointer;
`;

export const Social = styled.ul`
  min-width: 208px;
  width: 15%;
  padding: 10px;
  margin: 0 0 0 50%;
  white-space: nowrap;
`;

export const Li = styled.li`
  padding: 5px;
  margin: 0 2%;
  list-style-type: none;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
`;

export const imgBox = styled.div`
  padding: 1px;
`;

export const Img = styled.img`
  max-width: 20px;
  max-height: 14px;
`;
