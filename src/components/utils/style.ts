import styled from "styled-components";

// 水平盒子
interface HorizontalBoxProps {
  height: string;
  width: string;
  backgroundColor: string;
  justifyContent: string;
  flexWrap: string;
  position: string;
  borderBottom: string;
  overFlow: string;
}

export const HorizontalBox = styled.div<HorizontalBoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};
  overflow: hidden;
  position: ${(props) => props.position};
  border-bottom: ${(props) => props.borderBottom};
  overflow: ${(props) => props.overFlow};
`;

// 纵向盒子
interface VerticalBoxProps {
  height: string;
  width: string;
  backgroundColor: string;
  margin: string;
  position: string;
  minWidth: string;
  justifyContent: string;
  borderBottom: string;
  overFlow: string;
}
export const VerticalBox = styled.div<VerticalBoxProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  min-width: ${(props) => props.minWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  overflow: ${(props) => props.overFlow};
  border-bottom: ${(props) => props.borderBottom};
`;

// 背景照片
export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  margin: 0;
  /* transition: transform 2s ease;
  &:hover {
    transform: scale(1.5);
  } */
`;

// 固定在底部
export const PinToBottom = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 40px;
  position: absolute;
  bottom: 0;
`;

// TODO:加一个判断：是否有缩放效果
// 蒙版
export const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(105, 1, 45, 0.51);
  position: absolute;
`;

// 标题&描述盒子
export const InfoBox = styled.div`
  width: 95%;
  margin-left: 10px;
  margin-right: auto;
`;
