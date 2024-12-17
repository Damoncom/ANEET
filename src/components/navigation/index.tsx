import { HorizontalContent } from "../utils";
import { IconBox, PinToTop } from "./style";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import TextBox from "../textBox";
import homeIcon from "./icon/home.jpg";
import miespacioIcon from "./icon/mi-espacio.jpg";
import herramientasIcon from "./icon/herramientas.jpg";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

// NavigationButton 组件：这是一个通用的导航按钮组件，它接收 to、icon、label 和 isActive 作为属性。
// isActive 判断：根据 currentPath 判断当前页面是否为活动页面，并将结果传递给 NavigationButton

const NavigationButton: React.FC<{
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
}> = ({ to, icon, label, isActive }) => (
  <Link to={to}>
    <Button
      width="medium"
      height="large"
      margin="0 10px"
      fontWeight="medium"
      border={!isActive ? "none" : "red"}
    >
      <IconBox>
        <LittleIcon src={icon} alt={label.toLowerCase()} />
      </IconBox>
      <TextBox>{label}</TextBox>
    </Button>
  </Link>
);

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <PinToTop>
      <HorizontalContent justifyContent="spaceAround">
        <div style={{ display: "flex" }}>
          <NavigationButton
            to="/"
            icon={homeIcon}
            label="Home"
            isActive={currentPath === "/"}
          />
          <NavigationButton
            to="/mi-espacio"
            icon={miespacioIcon}
            label="Mi Espacio"
            isActive={currentPath === "/mi-espacio/"}
          />
          <NavigationButton
            to="/herramientas"
            icon={herramientasIcon}
            label="Herramientas"
            isActive={currentPath === "/herramientas/"}
          />
        </div>
      </HorizontalContent>
    </PinToTop>
  );
};

export default Navigation;
