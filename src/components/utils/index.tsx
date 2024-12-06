import React from "react";
import { HorizontalBox, VerticalBox, ImgBox } from "./style";

interface HorizontalContentProps {
  width?: "small" | "medium" | "large" | "xLarge" | "almost" | "whole";
  height?: "xxSmall" | "xSmall" | "midSmall" | "small" | "medium" | "large";
  backgroundColor?: "default" | "white" | "red";
  justifyContent?: "center" | "spaceBetween";
  children?: React.ReactNode;
}

interface VerticalContentProps {
  width?:
    | "small"
    | "medium"
    | "large"
    | "xLarge"
    | "xxLarge"
    | "whole"
    | "quarter"
    | "half";
  height?: "xxSmall" | "xSmall" | "midSmall" | "small" | "medium" | "large";
  backgroundColor?: "default" | "white";
  margin?: string;
  children?: React.ReactNode;
  position?: string;
}

const widthValues = {
  small: "237px",
  medium: "290px",
  large: "311px",
  xLarge: "390px",
  xxLarge: "604px",
  almost: "93%",
  whole: "100%",
  quarter: "25%",
  half: "50%",
};

const heightValues = {
  xxSmall: "40px",
  xSmall: "90px",
  midSmall: "232px",
  small: "249px",
  medium: "366px",
  large: "486px",
};

const backgroundColorValues = {
  default: "#f6f7fb",
  white: "#ffffff",
  red: "#7D0641",
};

const justifyContentValues = {
  center: "center",
  spaceBetween: "space-between",
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
  margin = "0px",
  children,
  position = "",
}) => {
  return (
    <VerticalBox
      width={widthValues[width]}
      height={heightValues[height]}
      backgroundColor={backgroundColorValues[backgroundColor]}
      margin={margin}
      position={position}
    >
      {children && children}
    </VerticalBox>
  );
};

interface BGImgProps {
  src: string;
  alt?: string;
}

export const BGImg: React.FC<BGImgProps> = ({ src, alt }) => {
  return <ImgBox src={src} alt={alt} />;
};
