import React from "react";
import { StyledImg } from "./style";

interface LittleIconProps {
  src: string;
  alt?: string;
  width?: "none" | "small" | "medium" | "midMedium" | "large" | "xLarge";
  height?: "xSmall" | "small" | "medium" | "large";
  marginLeft?: "small" | "medium" | "large";
  maxWidth?: "none" | "regular";
  boxShadow?: string;
  onClick?: () => void;
}

const widthValues = {
  none: "none",
  small: "14px",
  medium: "15px",
  midMedium: "17px",
  large: "20px",
  xLarge: "44px",
};

const heightValues = {
  xSmall: "12px",
  small: "14px",
  medium: "14px",
  large: "44px",
};

const marginLeftValues = {
  small: "0px",
  medium: "14px",
  large: "14px",
};

const maxWidthValues = {
  none: "none",
  regular: "20px",
};

const LittleIcon: React.FC<LittleIconProps> = ({
  src,
  alt = "image",
  width = "small",
  height = "small",
  marginLeft = "small",
  maxWidth = "none",
  boxShadow = "",
  onClick,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={widthValues[width]}
      height={heightValues[height]}
      marginLeft={marginLeftValues[marginLeft]}
      maxWidth={maxWidthValues[maxWidth]}
      boxShadow={boxShadow}
      onClick={onClick}
    />
  );
};

export default LittleIcon;
