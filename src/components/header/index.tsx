import { Logo, Social, Li } from "./style";
import { HorizontalContent } from "../utils";
import { StaticImage } from "gatsby-plugin-image";
import { socialData } from "./data";
import Button from "../button/index";
import LittleIcon from "../littleIcon";
import searchIcon from "../header/icon/social/search.jpg";
import { Input } from "./style";

const Header: React.FC = () => {
  return (
    <div>
      <HorizontalContent backgroundColor="white" justifyContent="spaceAround">
        <Logo>
          <StaticImage
            alt="logo"
            src="./icon/logo.jpg"
            style={{
              objectFit: "cover",
              width: "201px",
              height: "60px;",
            }}
          />
        </Logo>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "5%" }}
        >
          <Social>
            {socialData.map((item) => (
              <Li key={item.id}>
                <LittleIcon
                  src={item.icon}
                  alt={item.name}
                  width="none"
                  height="small"
                  maxWidth="regular"
                />
              </Li>
            ))}
          </Social>
          <Button>
            {/* TODO:添加query,使得alt是照片本来的名字 */}
            <LittleIcon
              src={searchIcon}
              alt="search"
              width="medium"
              marginLeft="medium"
            />
            <Input placeholder="Buscar" />
          </Button>
        </div>
      </HorizontalContent>
    </div>
  );
};

export default Header;
