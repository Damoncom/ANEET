import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 90px;
  background-color: #f6f7fb;
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
  width: 13%;
  padding: 10px;
  margin: 0 0 0 50%;
  white-space: nowrap;
`;

export const Li = styled.li`
  padding: 5px;
  margin: 0 1%;
  list-style-type: none;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 50%;
  height: 90%;
  font-size: 14px;
  color: #515151;
  margin-left: 10px;
`;
