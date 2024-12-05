import { Content } from "../utils/style";
import { IconBox } from "./style";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import TextBox from "../textBox";
import homeIcon from "./icon/home.jpg";
import miespacioIcon from "./icon/mi-espacio.jpg";
import herramientasIcon from "./icon/herramientas.jpg";

const Navigation: React.FC = () => {
  return (
    <Content>
      <Button
        width="medium"
        height="large"
        borderRadius="medium"
        margin="0 10px"
      >
        <IconBox>
          <LittleIcon src={homeIcon} alt="home" />
        </IconBox>
        <TextBox>Home</TextBox>
      </Button>
      <Button
        width="medium"
        height="large"
        borderRadius="medium"
        margin="0 10px"
      >
        <IconBox>
          <LittleIcon src={miespacioIcon} alt="miespacio" />
        </IconBox>

        <TextBox>Mi Espacio</TextBox>
      </Button>
      <Button
        width="medium"
        height="large"
        borderRadius="medium"
        margin="0 10px"
      >
        <IconBox>
          <LittleIcon src={herramientasIcon} alt="hoherramientasme" />
        </IconBox>

        <TextBox>Herramientas</TextBox>
      </Button>
    </Content>
  );
};

export default Navigation;
