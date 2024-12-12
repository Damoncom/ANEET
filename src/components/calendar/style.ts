import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 100%;
  margin: auto;
  background: #fff;
  border-radius: 8px;
  /* overflow: hidden; */
  min-height: calc(
    6 * 37.425px + 5 * 2px + 10px
  ); // 计算出最小高度（假设每个单元格40px高，5行间隔）
`;

export const Header = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  color: #b6004c;
  font-weight: bold;
`;

export const ChangeButton = styled.button`
  background: none;
  border: none;
  color: #b10f40;
  cursor: pointer;
  font-size: 16px;
  &:active {
    color: #df396b;
  }
`;

export const DaysRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cell = styled.div`
  width: 40px;
  /* height: 34.575px; */
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;
  border-radius: 50%;
  color: #000;

  &.disabled {
    color: #ccc;
  }

  &.today {
    background-color: #b6004c; // 今日日期的颜色
    color: white;
  }

  &.selected {
    background-color: #df396b;
    color: white;
  }
`;

export const ScrollBox = styled.div`
  height: 80px;
  overflow: scroll;
  background-color: #f6f7fb;

  /* TODO:win隐藏不了滚动条？ */
  /* &::-webkit-scrollbar {
    display: none;
  } */
  /*
  /* 隐藏滚动条，在 Firefox 中 */
  /* scrollbar-width: none; */

  /* 适用于更现代的 Firefox */
  /* -ms-overflow-style: none; IE 10+ */
`;
