import { Content, Logo, Social, Li } from "./style";
import { StaticImage } from "gatsby-plugin-image";
import { socialData } from "./data";
import Button from "../button/index";
import LittleIcon from "../littleIcon";

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
              <LittleIcon
                src={item.icon}
                alt={item.name}
                width="none"
                height="small"
                marginLeft="small"
                maxWidth="regular"
              />
              {/* <Img alt={item.name} src={item.icon}></Img> */}
            </Li>
          ))}
        </Social>
        <Button isIcon={true} />
      </Content>
    </div>
  );
};

export default Header;
