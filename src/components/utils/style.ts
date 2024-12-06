import styled from "styled-components";

// 水平盒子
interface HorizontalBoxProps {
  height: string;
  width: string;
  backgroundColor: string;
  justifyContent: string;
}

export const HorizontalBox = styled.div<HorizontalBoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

// 纵向盒子
interface VerticalBoxProps {
  height: string;
  width: string;
  backgroundColor: string;
  margin: string;
}
export const VerticalBox = styled.div<VerticalBoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

// 背景照片
export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
