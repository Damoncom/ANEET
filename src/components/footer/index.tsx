import { HorizontalContent } from "../utils";
import { PinToBottom, LeftBorder } from "./style";
import Button from "../button";
import TextBox from "../textBox";

const Footer: React.FC = () => {
  return (
    <PinToBottom>
      <HorizontalContent height="xxSmall" backgroundColor="red">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
        >
          <LeftBorder>
            <Button
              width="small"
              height="medium"
              backgroundColor="purple"
              borderRadius="none"
              color="white"
              border="none"
            >
              <TextBox>Sindicolombia</TextBox>
            </Button>
          </LeftBorder>
          <LeftBorder>
            <Button
              width="small"
              height="medium"
              backgroundColor="purple"
              borderRadius="none"
              color="white"
              border="none"
            >
              <TextBox>Sintradane</TextBox>
            </Button>
          </LeftBorder>
        </div>
      </HorizontalContent>
    </PinToBottom>
  );
};

export default Footer;
