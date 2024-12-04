import styled from "styled-components";

interface StyledButtonProps {
  borderRadius: string;
  backgroundColor: string;
  height: string;
  width: string;
  border: string;
  color: string;
  fontSize: string;
  isIcon: boolean;
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
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 90%;
  font-size: 14px;
  color: #515151;
  margin-left: 10px;
`;
