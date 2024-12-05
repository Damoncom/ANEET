import { HorizontalContent } from "../utils";
import { IconBox } from "./style";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import TextBox from "../textBox";
import homeIcon from "./icon/home.jpg";
import miespacioIcon from "./icon/mi-espacio.jpg";
import herramientasIcon from "./icon/herramientas.jpg";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Navigation: React.FC = () => {
  const location = useLocation();

  // 获取当前路径
  const currentPath = location.pathname;

  // 判断当前路径
  const isHomePage = currentPath === "/";
  const isMiEspacioPage = currentPath === "/mi-espacio/";
  const isHerramientasPage = currentPath === "/herramientas/";

  // console.log("currentPath:", currentPath);

  return (
    <HorizontalContent>
      <Link to="/">
        {!isHomePage && (
          <Button width="medium" height="large" margin="0 10px" border="none">
            <IconBox>
              <LittleIcon src={homeIcon} alt="home" />
            </IconBox>
            <TextBox>Home</TextBox>
          </Button>
        )}

        {isHomePage && (
          <Button width="medium" height="large" margin="0 10px">
            <IconBox>
              <LittleIcon src={homeIcon} alt="home" />
            </IconBox>
            <TextBox>Home</TextBox>
          </Button>
        )}
      </Link>
      <Link to="/mi-espacio">
        {!isMiEspacioPage && (
          <Button width="medium" height="large" margin="0 10px" border="none">
            <IconBox>
              <LittleIcon src={miespacioIcon} alt="miespacio" />
            </IconBox>
            <TextBox>Mi Espacio</TextBox>
          </Button>
        )}
        {isMiEspacioPage && (
          <Button width="medium" height="large" margin="0 10px">
            <IconBox>
              <LittleIcon src={miespacioIcon} alt="miespacio" />
            </IconBox>
            <TextBox>Mi Espacio</TextBox>
          </Button>
        )}
      </Link>
      <Link to="/herramientas">
        {!isHerramientasPage && (
          <Button width="medium" height="large" margin="0 10px" border="none">
            <IconBox>
              <LittleIcon src={herramientasIcon} alt="hoherramientasme" />
            </IconBox>
            <TextBox>Herramientas</TextBox>
          </Button>
        )}
        {isHerramientasPage && (
          <Button width="medium" height="large" margin="0 10px">
            <IconBox>
              <LittleIcon src={herramientasIcon} alt="hoherramientasme" />
            </IconBox>
            <TextBox>Herramientas</TextBox>
          </Button>
        )}
      </Link>
    </HorizontalContent>
  );
};

export default Navigation;
