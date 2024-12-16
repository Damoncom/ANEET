import React from "react";
import { StyledButton } from "./style";

// 定义 ButtonProps 接口
interface ButtonProps {
  borderRadius?: "none" | "small" | "medium" | "large";
  backgroundColor?:
    | "none"
    | "white"
    | "pink"
    | "red"
    | "transparentRed"
    | "purple"
    | "lightGrey";
  height?:
    | "small"
    | "medium"
    | "midMedium"
    | "large"
    | "minLarge"
    | "xLarge"
    | "xxLarge"
    | "sixteenth";
  width?:
    | "small"
    | "medium"
    | "large"
    | "xLarge"
    | "whole"
    | "third"
    | "realThird";
  border?: "none" | "red";
  color?: "white" | "red" | "black";
  fontSize?: "xSmall" | "small" | "medium" | "xMedium" | "large";
  onClick?: () => void;
  children?: React.ReactNode; // ?:把属性标记为可选
  margin?: string;
  letterSpacing?: string;
  fontWeight?: "none" | "medium";
  hoverBackgroundColor?: string;
  borderBottom?: "none" | "red";
}

// 定义预设值
const borderRadiusValues = {
  none: "0px",
  small: "4px",
  medium: "40px",
  large: "50px",
};

const backgroundColorValues = {
  none: "none",
  white: "#ffffff",
  pink: "#DF396B",
  red: "#B6004C",
  transparentRed: "rgba(182,0,76,0.9)",
  purple: "#7D0641",
  lightGrey: "#F5F6FA",
};

const widthValues = {
  small: "136px",
  medium: "186px",
  large: "200px",
  xLarge: "290px",
  whole: "100%",
  third: "30%",
  realThird: "33.33%",
};

const heightValues = {
  small: "32px",
  medium: "40px",
  midMedium: "46px",
  large: "48px",
  minLarge: "55px",
  xLarge: "56px",
  xxLarge: "112px",
  sixteenth: "16.6%",
};

const borderValues = {
  none: "1px solid #ffffff0",
  red: "1px solid #B6004C",
};

const colorValues = {
  white: "#ffffff",
  red: "#B6004C",
  black: "#20253A",
};

const fontSizeValues = {
  xSmall: "13px",
  small: "14px",
  medium: "16px",
  xMedium: "18px",
  large: "32px",
};

const fontWeightValues = {
  none: "none",
  medium: "700",
};

const borderBottomValues = {
  none: "",
  red: "2px solid #B6004C",
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
  fontWeight = "none",
  hoverBackgroundColor = "",
  borderBottom = "none",
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
      fontWeight={fontWeightValues[fontWeight]}
      hoverBackgroundColor={hoverBackgroundColor}
      borderBottom={borderBottomValues[borderBottom]}
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
