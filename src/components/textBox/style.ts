import styled from "styled-components";

// 使用这个组件前提是父组件设置position: relative
export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
