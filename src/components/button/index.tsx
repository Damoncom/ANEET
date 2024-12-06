import React from "react";
import { StyledButton } from "./style";

// 定义 ButtonProps 接口
interface ButtonProps {
  borderRadius?: "none" | "small" | "medium" | "large";
  backgroundColor?: "white" | "pink" | "red" | "purple";
  height?: "small" | "medium" | "large" | "xLarge";
  width?: "small" | "medium" | "large" | "xLarge" | "whole";
  border?: "none" | "red";
  color?: "white" | "red";
  fontSize?: "small" | "medium" | "large";
  onClick?: () => void;
  children?: React.ReactNode; // ?:把属性标记为可选
  margin?: string;
  letterSpacing?: string;
}

// 定义预设值
const borderRadiusValues = {
  none: "0px",
  small: "4px",
  medium: "40px",
  large: "50px",
};

const backgroundColorValues = {
  white: "#ffffff",
  pink: "#DF396B",
  red: "#B6004C",
  purple: "#7D0641",
};

const widthValues = {
  small: "136px",
  medium: "186px",
  large: "200px",
  xLarge: "290px",
  whole: "100%",
};

const heightValues = {
  small: "32px",
  medium: "40px",
  large: "48px",
  xLarge: "56px",
};

const borderValues = {
  none: "1px solid #ffffff0",
  red: "1px solid #B6004C",
};

const colorValues = {
  white: "#ffffff",
  red: "#B6004C",
};

const fontSizeValues = {
  small: "14px",
  medium: "16px",
  large: "32px",
};

const Button: React.FC<ButtonProps> = ({
  borderRadius = "medium",
  backgroundColor = "white",
  height = "small",
  width = "large",
  border = "red",
  color = "red",
  fontSize = "small",
  onClick,
  children,
  margin = "0px",
  letterSpacing = "none",
}) => {
  return (
    <StyledButton
      borderRadius={borderRadiusValues[borderRadius]}
      backgroundColor={backgroundColorValues[backgroundColor]}
      height={heightValues[height]}
      width={widthValues[width]}
      border={borderValues[border]}
      color={colorValues[color]}
      fontSize={fontSizeValues[fontSize]}
      margin={margin}
      letterSpacing={letterSpacing}
      onClick={onClick}
    >
      {/* TODO:报错：“children”被指定了两次。将覆盖名为“children”的特性。ts(2710) */}
      {/* {children && <TextBox>{children}</TextBox>} */}
      {children && children}
      {/* 仅在children存在时才渲染 */}
    </StyledButton>
  );
};

export default Button;
