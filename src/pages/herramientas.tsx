import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent } from "../components/utils";
import { InfoBox } from "../components/utils/style";
import { titleData, toolsData } from "../components/data/herramientasData";
import Button from "../components/button";

const Herramientas: React.FC = () => (
  <div>
    <Header />
    <Navigation />
    <HorizontalContent height="large" position="fixed">
      {/* TODO:左边缩进问题 */}
      <VerticalContent width="eighth" minWidth="large">
        {/* 标题 */}
        <VerticalContent width="whole" height="tMedium" justifyContent="center">
          <InfoBox
            style={{
              fontSize: "24px",
              lineHeight: "24px",
              color: "#B6004C",
              width: "20%",
              minWidth: "150px",
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
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
            }}
          >
            {titleData.description}
          </InfoBox>
        </VerticalContent>
        {/* 内容 */}
        <HorizontalContent height="medium" margin="10px 0 0 0 ">
          {toolsData.map((item) => (
            <VerticalContent
              width="quarter"
              height="whole"
              backgroundColor="white"
              justifyContent="center"
              margin="0 2%"
              key={item.id}
              borderRadius="4px"
            >
              <InfoBox
                style={{
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#20253A",
                  margin: "10px 0",
                  fontWeight: "700",
                  padding: "0 20px",
                }}
              >
                {item.title}
              </InfoBox>
              <VerticalContent
                width="ninth"
                height="eighth"
                backgroundColor="white"
                justifyContent="start"
              >
                {item.tools.map((product, index) => (
                  <Button
                    width="whole"
                    height="sixteenth"
                    border="none"
                    borderRadius="none"
                    color="black"
                    backgroundColor={index % 2 === 0 ? "lightGrey" : "white"}
                    enableHover={false}
                    key={product.order}
                  >
                    <InfoBox style={{ marginLeft: "30px" }}>
                      {product.name}
                    </InfoBox>
                  </Button>
                ))}
              </VerticalContent>
            </VerticalContent>
          ))}
        </HorizontalContent>
      </VerticalContent>
    </HorizontalContent>
    <Footer />
  </div>
);

export default Herramientas;
