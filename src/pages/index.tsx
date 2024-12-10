import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent, BGImg } from "../components/utils";
import Button from "../components/button";
import TextBox from "../components/textBox";
import { bannerData, plateData } from "../components/data/homeData";
import { Mask, PinToBottom } from "../components/utils/style";

const Home: React.FC = () => {
  console.log("bannerData:", bannerData);
  return (
    <div>
      <Header />
      <Navigation />
      <HorizontalContent
        height="large"
        justifyContent="spaceBetween"
        position="fixed"
      >
        {/* 左侧 */}
        <VerticalContent width="quarter" margin="0 3%" minWidth="small">
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
        <VerticalContent width="half" margin="0 3%" minWidth="medium">
          <VerticalContent width="whole" height="midSmall" position="relative">
            <BGImg src={bannerData.icon} alt="home-banner" />
            <PinToBottom>
              <Button
                width="whole"
                height="medium"
                borderRadius="none"
                backgroundColor="red"
                color="white"
              >
                <b style={{ margin: "0 5px 0 10px" }}>{bannerData.title}</b>
                {bannerData.description}
              </Button>
            </PinToBottom>
          </VerticalContent>
          <HorizontalContent
            height="small"
            justifyContent="spaceBetween"
            flexWrap="wrap"
          >
            {plateData.map((item) => (
              <Button
                width="third"
                height="xxLarge"
                borderRadius="small"
                backgroundColor="none"
                border="none"
                color="white"
                fontSize="xMedium"
                key={item.id}
              >
                <BGImg src={item.icon} alt={item.name}></BGImg>
                <Mask />
                <TextBox>{item.name}</TextBox>
              </Button>
            ))}
          </HorizontalContent>
        </VerticalContent>

        {/* 右侧 */}
        <VerticalContent width="quarter" margin="0 3%" minWidth="small">
          <HorizontalContent
            height="minXSmall"
            backgroundColor="white"
            borderBottom="1px solid #E6ECF0"
          >
            <Button
              width="realThird"
              height="minLarge"
              border="none"
              borderRadius="none"
              fontWeight="medium"
            >
              <TextBox>Twitter</TextBox>
            </Button>
            <Button
              width="realThird"
              height="minLarge"
              border="none"
              borderRadius="none"
              fontWeight="medium"
            >
              <TextBox>+Visto</TextBox>
            </Button>
            <Button
              width="realThird"
              height="minLarge"
              border="none"
              borderRadius="none"
              fontWeight="medium"
            >
              <TextBox>Medios</TextBox>
            </Button>
          </HorizontalContent>
          <VerticalContent
            width="whole"
            height="minMedium"
            backgroundColor="white"
          ></VerticalContent>
          <HorizontalContent
            height="minXSmall"
            backgroundColor="white"
          ></HorizontalContent>
        </VerticalContent>
      </HorizontalContent>
      <Footer />
    </div>
  );
};

export default Home;
