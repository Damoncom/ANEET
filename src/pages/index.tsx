import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent, BGImg } from "../components/utils";
import Button from "../components/button";
import TextBox from "../components/textBox";
// import homeBannerIcon from "../components/icon/home-banner.png";

const Home: React.FC = () => {
  console.log("BGImg:", BGImg);
  return (
    <div>
      <Header />
      <Navigation />
      <HorizontalContent height="large" justifyContent="spaceBetween">
        {/* 左侧 */}
        <VerticalContent width="quarter">
          <HorizontalContent height="xxSmall" justifyContent="spaceBetween">
            <Button
              width="small"
              height="medium"
              backgroundColor="red"
              borderRadius="small"
              color="white"
              fontSize="medium"
              letterSpacing="3.2px"
            >
              <TextBox>FEDANE</TextBox>
            </Button>
            <Button
              width="small"
              height="medium"
              backgroundColor="red"
              borderRadius="small"
              color="white"
              fontSize="medium"
              letterSpacing="3.2px"
            >
              <TextBox>COODANE</TextBox>
            </Button>
          </HorizontalContent>
          <VerticalContent height="medium" margin="0"></VerticalContent>
          <HorizontalContent height="xxSmall"></HorizontalContent>
          <HorizontalContent height="xxSmall"></HorizontalContent>
        </VerticalContent>
        {/* 中间 */}
        <VerticalContent width="half">
          <HorizontalContent height="midSmall">
            {/* <BGImg src={homeBannerIcon} alt="home-banner"></BGImg> */}
            <BGImg src="" alt="home-banner"></BGImg>
          </HorizontalContent>
          <HorizontalContent height="small"></HorizontalContent>
        </VerticalContent>
        {/* 右侧 */}
        <VerticalContent width="quarter"></VerticalContent>
      </HorizontalContent>
      <Footer />
    </div>
  );
};

export default Home;
