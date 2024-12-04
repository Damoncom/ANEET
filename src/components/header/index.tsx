import { Content, Logo, Social, Li, Img } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { socialData } from "./data";

const Header: React.FC = () => {
  console.log("socialData", socialData);
  return (
    <div>
      <Content>
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
              <Img alt={item.name} src={item.icon}></Img>
            </Li>
          ))}
        </Social>
      </Content>
    </div>
  );
};

export default Header;
