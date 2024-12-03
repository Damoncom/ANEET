import { Content, Logo, Social } from "./style";
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
        <Social></Social>
      </Content>
    </div>
  );
};

export default Header;
