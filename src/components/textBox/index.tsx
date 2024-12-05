import { Box } from "./style";

// 暂时只适用于button组件里的文字
const TextBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default TextBox;
