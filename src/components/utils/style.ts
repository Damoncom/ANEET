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
  margin: string;
  minWidth: string;
  borderRadius: string;
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
  margin: ${(props) => props.margin};
  min-width: ${(props) => props.minWidth};
  border-radius: ${(props) => props.borderRadius};
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
  borderRadius: string;
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
  border-radius: ${(props) => props.borderRadius};
`;

// 背景照片
export const ImgBox = styled.img<{ shouldScale?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  margin: 0;

  // 动态样式基于传入的 shouldScale 属性
  ${({ shouldScale }) =>
    shouldScale &&
    `
    transition: transform 2s ease;
    &:hover {
      transform: scale(1.5);
    }
  `}
`;

// 固定在底部
export const PinToBottom = styled.div`
  width: 100%;
  /* height: 100%; */
  height: 40px;
  position: absolute;
  bottom: 0;
`;

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

// 滚动盒子
export const ScrollBox = styled.div`
  /* 一定要给一个固定高度 */
  overflow-y: scroll;
  background-color: rgb(255, 255, 255);

  /* 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }
  /* 隐藏滚动条，在 Firefox 中 */
  scrollbar-width: none;

  /* 适用于更现代的 Firefox IE 10+*/
  -ms-overflow-style: none;
`;
