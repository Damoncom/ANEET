import React from "react";
import { HorizontalBox, VerticalBox, ImgBox } from "./style";

// TODO:背景颜色透明度
interface HorizontalContentProps {
  width?:
    | "small"
    | "medium"
    | "large"
    | "xLarge"
    | "almost"
    | "whole"
    | "eighth";
  height?:
    | "xxSmall"
    | "minXSmall"
    | "sSmall"
    | "xSmall"
    | "midSmall"
    | "small"
    | "medium"
    | "large";
  backgroundColor?: "default" | "white" | "red";
  justifyContent?: "center" | "spaceBetween";
  children?: React.ReactNode;
  flexWrap?: "nowrap" | "wrap";
  position?: string;
  borderBottom?: string;
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
  height?:
    | "xxSmall"
    | "minXSmall"
    | "xSmall"
    | "midSmall"
    | "small"
    | "medium"
    | "minMedium"
    | "xMedium"
    | "large";
  backgroundColor?: "default" | "white";
  margin?: string;
  children?: React.ReactNode;
  position?: string;
  minWidth?: "small" | "medium" | "large" | "none";
  justifyContent?: "center" | "spaceBetween";
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
  eighth: "80%",
};

const heightValues = {
  xxSmall: "40px",
  minXSmall: "55px",
  sSmall: "80px",
  xSmall: "90px",
  midSmall: "232px",
  small: "249px",
  minMedium: "376px",
  medium: "366px",
  xMedium: "406px",
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

const flexWrapValues = {
  nowrap: "nowrap",
  wrap: "wrap",
};
const minWidthvalues = {
  none: "none",
  small: "290px",
  medium: "604px",
  large: "",
};

export const HorizontalContent: React.FC<HorizontalContentProps> = ({
  width = "whole",
  height = "xSmall",
  backgroundColor = "default",
  justifyContent = "center",
  children,
  flexWrap = "nowrap",
  position = "",
  borderBottom = "",
}) => {
  return (
    <HorizontalBox
      width={widthValues[width]}
      height={heightValues[height]}
      backgroundColor={backgroundColorValues[backgroundColor]}
      justifyContent={justifyContentValues[justifyContent]}
      flexWrap={flexWrapValues[flexWrap]}
      position={position}
      borderBottom={borderBottom}
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
  minWidth = "none",
  justifyContent = "spaceBetween",
}) => {
  return (
    <VerticalBox
      width={widthValues[width]}
      height={heightValues[height]}
      backgroundColor={backgroundColorValues[backgroundColor]}
      margin={margin}
      position={position}
      minWidth={minWidthvalues[minWidth]}
      justifyContent={justifyContentValues[justifyContent]}
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
