import styled from "styled-components";

interface StyledButtonProps {
  borderRadius: string;
  backgroundColor: string;
  height: string;
  width: string;
  border: string;
  color: string;
  fontSize: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;
