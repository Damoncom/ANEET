import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent } from "../components/utils";
import { InfoBox } from "../components/utils/style";
import { titleData } from "../components/data/herramientasData";

const Herramientas: React.FC = () => (
  <div>
    <Header />
    <Navigation />
    <HorizontalContent height="large">
      <VerticalContent width="eighth">
        {/* 标题 */}
        <VerticalContent width="whole" height="tMedium" justifyContent="center">
          <InfoBox
            style={{
              fontSize: "24px",
              lineHeight: "24px",
              color: "#B6004C",
              width: "20%",
            }}
          >
            {titleData.title}
          </InfoBox>
          <InfoBox
            style={{
              width: "7%",
              height: "2px",
              backgroundColor: "#B6004C",
              margin: "17px auto 17px 10px",
            }}
          />
          <InfoBox
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "#20253A",
              height: "54px",
              width: "53%",
            }}
          >
            {titleData.description}
          </InfoBox>
        </VerticalContent>
        {/* 内容 */}
        <HorizontalContent height="medium"> </HorizontalContent>
      </VerticalContent>
    </HorizontalContent>
    <Footer />
  </div>
);

export default Herramientas;
