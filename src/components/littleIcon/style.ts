import styled from "styled-components";

interface StyledImgProps {
  width: string;
  height: string;
  marginLeft: string;
  maxWidth: string;
  boxShadow: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  object-fit: contain; // 保持图片比例
  margin: 0;
  margin-left: ${(props) => props.marginLeft};
  max-width: ${(props) => props.maxWidth};
  box-shadow: ${(props) => props.boxShadow};
`;
