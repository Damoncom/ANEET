import styled from "styled-components";

interface StyledImgProps {
  width: string;
  height: string;
  marginLeft: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover; // 保持图片比例
  margin: 0;
  margin-left: ${(props) => props.marginLeft};
`;
