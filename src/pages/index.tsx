import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent, BGImg } from "../components/utils";
import Button from "../components/button";
import TextBox from "../components/textBox";
import homeBannerIcon from "../components/icon/home-banner.png";
import { PinToBottom } from "../components/utils/style";

const Home: React.FC = () => {
  console.log("BGImg:", BGImg);
  return (
    <div>
      <Header />
      <Navigation />
      <HorizontalContent height="large" justifyContent="spaceBetween">
        {/* 左侧 */}
        <VerticalContent width="quarter" margin="0 3%">
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
        <VerticalContent width="half" margin="0 3%">
          <VerticalContent width="whole" height="midSmall" position="relative">
            <BGImg src={homeBannerIcon} alt="home-banner" />
            <PinToBottom>
              <Button
                width="whole"
                height="medium"
                borderRadius="none"
                backgroundColor="red"
                color="white"
              >
                <TextBox>LÍNEA EDITORIAL</TextBox>
                <TextBox>Temas que se quieren posicionar</TextBox>
              </Button>
            </PinToBottom>
          </VerticalContent>
          <HorizontalContent height="small"></HorizontalContent>
        </VerticalContent>
        {/* 右侧 */}
        <VerticalContent width="quarter" margin="0 3%"></VerticalContent>
      </HorizontalContent>
      <Footer />
    </div>
  );
};

export default Home;
