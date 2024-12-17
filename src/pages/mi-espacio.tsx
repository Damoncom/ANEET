import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent, BGImg } from "../components/utils";
import { InfoBox, ScrollBox, Mask } from "../components/utils/style";
import Button from "../components/button";
import TextBox from "../components/textBox";
import { projectData, plateData } from "../components/data/miEspacioData";
import LittleIcon from "../components/littleIcon";
import menuIcon from "../components/icon/miEspacio/menu.png";

const MiEspacio: React.FC = () => (
  <div>
    <Header />
    <Navigation />
    <HorizontalContent
      height="large"
      // position="fixed"
      justifyContent="spaceAround"
    >
      <VerticalContent width="eighth" minWidth="large">
        {/* 创建项目按钮 */}
        <InfoBox
          style={{
            width: "100%",
            height: "55px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            width="medium"
            height="medium"
            color="white"
            fontSize="small"
            backgroundColor="red"
          >
            <TextBox>+ Crear proyectos</TextBox>
          </Button>
        </InfoBox>
        {/* 项目内容 */}
        <HorizontalContent height="small" margin="15px 0">
          {projectData.map((item) => (
            // 项目名
            <VerticalContent
              width="third"
              height="whole"
              backgroundColor="white"
              margin="0 2%"
              borderRadius="4px"
              justifyContent="center"
              key={item.id}
            >
              <HorizontalContent
                width="ninth"
                height="xxSmall"
                backgroundColor="white"
                // margin="10px 0"
              >
                <InfoBox
                  style={{
                    fontSize: "21px",
                    lineHeight: "21px",
                    fontWeight: "700",
                    color: "#20253A",
                  }}
                >
                  {item.title}
                </InfoBox>
                <LittleIcon
                  src={menuIcon}
                  alt="menu"
                  height="xSmall"
                ></LittleIcon>
              </HorizontalContent>
              {/* 任务 */}
              <VerticalContent
                width="ninth"
                height="tMedium"
                backgroundColor="white"
              >
                <ScrollBox style={{ width: "100%", height: "100%" }}>
                  {/* uncompleted */}
                  <InfoBox
                    style={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#20253A",
                      fontWeight: "700",
                    }}
                  >
                    {item.uncompleted.title}
                  </InfoBox>
                  {item.uncompleted.tasks.map((product) => (
                    <Button
                      width="whole"
                      height="large"
                      border="none"
                      borderRadius="none"
                      color="black"
                      backgroundColor="lightGrey"
                      margin="10px 0"
                      enableHover={false}
                      key={product.order}
                    >
                      <InfoBox style={{ marginLeft: "25px" }}>
                        {product.name}
                      </InfoBox>
                    </Button>
                  ))}
                  {/* completed */}
                  <InfoBox
                    style={{
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#20253A",
                      fontWeight: "700",
                    }}
                  >
                    {item.completed.title}
                  </InfoBox>
                  {item.completed.tasks.map((product) => (
                    <Button
                      width="whole"
                      height="large"
                      border="none"
                      borderRadius="none"
                      color="black"
                      backgroundColor="lightGrey"
                      margin="10px 0"
                      enableHover={false}
                      key={product.order}
                    >
                      <InfoBox style={{ marginLeft: "25px" }}>
                        {product.name}
                      </InfoBox>
                    </Button>
                  ))}
                </ScrollBox>
              </VerticalContent>
            </VerticalContent>
          ))}
        </HorizontalContent>
        <HorizontalContent
          height="midSmall"
          justifyContent="spaceBetween"
          flexWrap="wrap"
        >
          {plateData.map((item) => (
            <Button
              width="third"
              height="midLarge"
              borderRadius="small"
              backgroundColor="none"
              border="none"
              color="white"
              fontSize="xMedium"
              key={item.id}
            >
              <BGImg src={item.icon} alt={item.name}></BGImg>
              <Mask style={{ backgroundColor: "rgba(176,20,80,0.56)" }} />
              <TextBox>{item.name}</TextBox>
            </Button>
          ))}
        </HorizontalContent>
      </VerticalContent>
    </HorizontalContent>
    <Footer />
  </div>
);

export default MiEspacio;
