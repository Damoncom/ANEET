import styled from "styled-components";
interface StyledButtonProps {
  borderRadius: string;
  backgroundColor: string;
  height: string;
  width: string;
  border: string;
  color: string;
  fontSize: string;
  margin: string;
  letterSpacing: string;
  fontWeight: string;
  hoverBackgroundColor: string;
  borderBottom: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  letter-spacing: ${(props) => props.letterSpacing};
  font-weight: ${(props) => props.fontWeight};
  border-bottom: ${(props) => props.borderBottom};

  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;
