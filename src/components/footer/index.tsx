import { HorizontalContent } from "../utils";
import { PinToBottom } from "./style";

const Footer: React.FC = () => {
  return (
    <PinToBottom>
      <HorizontalContent
        height="xxSmall"
        backgroundColor="red"
      ></HorizontalContent>
    </PinToBottom>
  );
};

export default Footer;
