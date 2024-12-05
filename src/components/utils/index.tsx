import React from "react";
import { HorizontalBox, VerticalBox } from "./style";

interface HorizontalContentProps {
  width?: "small" | "medium" | "large" | "xLarge" | "whole";
  height?: "xxSmall" | "xSmall" | "small" | "medium" | "large";
  backgroundColor?: "default" | "white";
  justifyContent?: "center" | "spaceAround";
  children?: React.ReactNode;
}

interface VerticalContentProps {
  width?: "small" | "medium" | "large" | "xLarge" | "whole";
  height?: "xxSmall" | "xSmall" | "small" | "medium" | "large";
  backgroundColor?: "default" | "white";
}

const widthValues = {
  small: "237px",
  medium: "290px",
  large: "311px",
  xLarge: "390px",
  whole: "100%",
};

const heightValues = {
  xxSmall: "40px",
  xSmall: "90px",
  small: "249px",
  medium: "366px",
  large: "486px",
};

const backgroundColorValues = {
  default: "#f6f7fb",
  white: "#ffffff",
};

const justifyContentValues = {
  center: "center",
  spaceAround: "space-around",
};

export const HorizontalContent: React.FC<HorizontalContentProps> = ({
  width = "whole",
  height = "xSmall",
  backgroundColor = "default",
  justifyContent = "center",
  children,
}) => {
  return (
    <HorizontalBox
      width={widthValues[width]}
      height={heightValues[height]}
      backgroundColor={backgroundColorValues[backgroundColor]}
      justifyContent={justifyContentValues[justifyContent]}
    >
      {children && children}
    </HorizontalBox>
  );
};

export const VerticalContent: React.FC<VerticalContentProps> = ({
  width = "medium",
  height = "large",
  backgroundColor = "default",
}) => {
  return (
    <VerticalBox
      width={widthValues[width]}
      height={heightValues[height]}
      backgroundColor={backgroundColorValues[backgroundColor]}
    />
  );
};
