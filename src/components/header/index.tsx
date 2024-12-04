import { Content, Logo, Social, Li } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { socialData } from "./data";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import searchIcon from "../header/icon/social/search.jpg";
import { Input } from "./style";
import TextBox from "../textBox";

const Header: React.FC = () => {
  console.log("socialData", socialData);
  return (
    <div>
      <Content style={{ backgroundColor: "white" }}>
        <Logo>
          <StaticImage
            alt="logo"
            src="./icon/logo.jpg"
            style={{ objectFit: "cover" }}
          />
        </Logo>
        <Social>
          {socialData.map((item) => (
            <Li key={item.id}>
              <LittleIcon
                src={item.icon}
                alt={item.name}
                width="none"
                height="small"
                marginLeft="small"
                maxWidth="regular"
              />
            </Li>
          ))}
        </Social>
        <Button>
          {/* TODO:添加query,使得alt是照片本来的名字 */}
          <LittleIcon src={searchIcon} alt="search" width="medium" />
          <Input placeholder="Buscar" />
        </Button>
      </Content>
      <Content>
        <Button width="medium" height="large" borderRadius="medium">
          <LittleIcon src={searchIcon} alt="search" width="medium" />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          {/* <TextBox>Home</TextBox> */}
        </Button>
        <Button
          width="medium"
          height="large"
          borderRadius="medium"
          children="Mi Espacio"
        />
        <Button
          width="medium"
          height="large"
          borderRadius="medium"
          children="Herramientas"
        />
      </Content>
    </div>
  );
};

export default Header;
