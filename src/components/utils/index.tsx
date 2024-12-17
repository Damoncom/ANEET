import React from "react";
import { HorizontalBox, VerticalBox, ImgBox } from "./style";

interface HorizontalContentProps {
  width?:
    | "small"
    | "medium"
    | "large"
    | "xLarge"
    | "almost"
    | "whole"
    | "eighth"
    | "ninth";
  height?:
    | "xxSmall"
    | "minXSmall"
    | "sSmall"
    | "xSmall"
    | "midSmall"
    | "small"
    | "medium"
    | "large"
    | "whole";
  backgroundColor?: "default" | "white" | "red";
  justifyContent?: "center" | "spaceBetween";
  children?: React.ReactNode;
  flexWrap?: "nowrap" | "wrap";
  position?: string;
  borderBottom?: string;
  overFlow?: string;
  margin?: string;
  minWidth?: string;
  borderRadius?: string;
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
    | "third"
    | "half"
    | "eighth"
    | "ninth";
  height?:
    | "xxSmall"
    | "minXSmall"
    | "xSmall"
    | "midSmall"
    | "small"
    | "tMedium"
    | "medium"
    | "minMedium"
    | "xMedium"
    | "midLarge"
    | "large"
    | "eighth"
    | "whole";
  backgroundColor?: "default" | "white";
  margin?: string;
  children?: React.ReactNode;
  position?: string;
  minWidth?: "small" | "medium" | "large" | "none";
  justifyContent?: "center" | "spaceBetween" | "start";
  borderBottom?: string;
  overFlow?: string;
  borderRadius?: string;
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
  third: "33.33%",
  half: "50%",
  eighth: "80%",
  ninth: "90%",
};

const heightValues = {
  xxSmall: "40px",
  minXSmall: "55px",
  sSmall: "80px",
  xSmall: "90px",
  tMedium: "125px",
  midSmall: "232px",
  small: "249px",
  minMedium: "376px",
  medium: "366px",
  xMedium: "406px",
  midLarge: "436px",
  large: "486px",
  eighth: "80%",
  whole: "100%",
};

const backgroundColorValues = {
  default: "#f6f7fb",
  white: "#ffffff",
  red: "#7D0641",
};

const justifyContentValues = {
  center: "center",
  spaceBetween: "space-between",
  start: "start",
};

const flexWrapValues = {
  nowrap: "nowrap",
  wrap: "wrap",
};
const minWidthvalues = {
  none: "none",
  small: "290px",
  medium: "604px",
  large: "800px",
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
  overFlow = "hidden",
  margin = "",
  minWidth = "",
  borderRadius = "",
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
      overFlow={overFlow}
      margin={margin}
      minWidth={minWidth}
      borderRadius={borderRadius}
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
  borderBottom = "",
  overFlow = "hidden",
  borderRadius = "",
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
      borderBottom={borderBottom}
      overFlow={overFlow}
      borderRadius={borderRadius}
    >
      {children && children}
    </VerticalBox>
  );
};

interface BGImgProps {
  src: string;
  alt?: string;
  shouldScale?: boolean;
}

export const BGImg: React.FC<BGImgProps> = ({ src, alt, shouldScale }) => {
  return <ImgBox src={src} alt={alt} shouldScale={shouldScale} />;
};
