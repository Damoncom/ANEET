import React from "react";
import { StyledImg } from "./style";

interface LittleIconProps {
  src: string;
  alt?: string;
  width?: "none" | "small" | "medium" | "large";
  height?: "small" | "medium" | "large";
  marginLeft?: "small" | "medium" | "large";
  maxWidth?: "none" | "regular";
}

const widthValues = {
  none: "none",
  small: "14px",
  medium: "15px",
  large: "20px",
};

const heightValues = {
  small: "14px",
  medium: "14px",
  large: "14px",
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
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={widthValues[width]}
      height={heightValues[height]}
      marginLeft={marginLeftValues[marginLeft]}
      maxWidth={maxWidthValues[maxWidth]}
    />
  );
};

export default LittleIcon;
