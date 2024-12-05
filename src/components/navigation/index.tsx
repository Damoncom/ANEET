import { Content } from "../utils/style";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import TextBox from "../textBox";
import homeIcon from "./icon/home.jpg";
import miespacioIcon from "./icon/mi-espacio.jpg";
import herramientasIcon from "./icon/herramientas.jpg";

const Navigation: React.FC = () => {
  return (
    <Content>
      <Button width="medium" height="large" borderRadius="medium">
        <LittleIcon src={homeIcon} alt="home" />
        <TextBox>Home</TextBox>
      </Button>
      <Button width="medium" height="large" borderRadius="medium">
        <LittleIcon src={miespacioIcon} alt="miespacio" />
        <TextBox>Mi Espacio</TextBox>
      </Button>
      <Button width="medium" height="large" borderRadius="medium">
        <LittleIcon src={herramientasIcon} alt="hoherramientasme" />
        <TextBox>Herramientas</TextBox>
      </Button>
    </Content>
  );
};

export default Navigation;
