// import React from "react";
// import { graphql } from "gatsby";
// import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
// import Header from "../components/header/index";
// import Navigation from "../components/navigation";
// import Footer from "../components/footer";
// import { HorizontalContent, VerticalContent } from "../components/utils";
// import Button from "../components/button";
// import TextBox from "../components/textBox";
// import { bannerData, plateData, newsData } from "../components/data/homeData";
// import { Mask, PinToBottom, InfoBox } from "../components/utils/style";
// import LittleIcon from "../components/littleIcon";
// import birdIcon from "../components/icon/home/news/bird.png";
// import likeIcon from "../components/icon/home/news/like.png";
// import shareIcon from "../components/icon/home/news/share.png";
// import Calendar from "../components/calendar";

// interface BannerImageData {
//   bannerImage: {
//     childImageSharp: {
//       gatsbyImageData: IGatsbyImageData;
//     };
//   };
//   plateImages: {
//     nodes: Array<{
//       childImageSharp: {
//         gatsbyImageData: IGatsbyImageData;
//       };
//     }>;
//   };
// }

// const Home: React.FC<{ data: BannerImageData }> = ({ data }) => {
//   const [selectedNewsId, setSelectedNewsId] = React.useState<number | null>(1);

//   const bannerImageData = data.bannerImage.childImageSharp.gatsbyImageData;
//   const bannerImage = bannerImageData ? getImage(bannerImageData) : null;

//   const plateImages = data.plateImages.nodes.map(
//     (node: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }) => {
//       return getImage(node.childImageSharp.gatsbyImageData);
//     }
//   );

//   return (
//     <div>
//       <Header />
//       <Navigation />
//       <HorizontalContent height="large" justifyContent="spaceBetween">
//         {/* 左侧 */}
//         <VerticalContent width="quarter" margin="0 3%" minWidth="small">
//           <HorizontalContent height="xxSmall" justifyContent="spaceBetween">
//             <Button
//               width="small"
//               height="medium"
//               backgroundColor="red"
//               borderRadius="small"
//               color="white"
//               fontSize="medium"
//               letterSpacing="3.2px"
//             >
//               <TextBox>FEDANE</TextBox>
//             </Button>
//             <Button
//               width="small"
//               height="medium"
//               backgroundColor="red"
//               borderRadius="small"
//               color="white"
//               fontSize="medium"
//               letterSpacing="3.2px"
//             >
//               <TextBox>COODANE</TextBox>
//             </Button>
//           </HorizontalContent>
//           <VerticalContent width="whole" height="midLarge" margin="0">
//             <Calendar />
//           </VerticalContent>
//         </VerticalContent>

//         {/* 中间 */}
//         <VerticalContent width="half" margin="0 3%" minWidth="medium">
//           <VerticalContent width="whole" height="midSmall" position="relative">
//             <GatsbyImage image={bannerImage!} alt="home-banner" />
//             <PinToBottom>
//               <Button
//                 width="whole"
//                 height="medium"
//                 borderRadius="none"
//                 backgroundColor="transparentRed"
//                 color="white"
//               >
//                 <b style={{ margin: "0 5px 0 10px" }}>{bannerData.title}</b>
//                 {bannerData.description}
//               </Button>
//             </PinToBottom>
//           </VerticalContent>
//           <HorizontalContent
//             height="small"
//             justifyContent="spaceBetween"
//             flexWrap="wrap"
//           >
//             {plateData.map((item, index) => {
//               const image = plateImages[index];
//               return (
//                 image && (
//                   <Button
//                     key={item.id}
//                     width="third"
//                     height="xxLarge"
//                     borderRadius="small"
//                     backgroundColor="none"
//                     border="none"
//                     color="white"
//                     fontSize="xMedium"
//                   >
//                     <GatsbyImage image={image} alt={item.name} />
//                     <Mask />
//                     <TextBox>{item.name}</TextBox>
//                   </Button>
//                 )
//               );
//             })}
//           </HorizontalContent>
//         </VerticalContent>

//         {/* 右侧 */}
//         <VerticalContent
//           width="quarter"
//           height="large"
//           margin="0 3%"
//           minWidth="small"
//         >
//           <HorizontalContent
//             height="minXSmall"
//             backgroundColor="white"
//             borderBottom="1px solid #E6ECF0"
//           >
//             {newsData.map((item) => (
//               <Button
//                 width="realThird"
//                 height="midMedium"
//                 border="none"
//                 borderRadius="none"
//                 fontWeight="medium"
//                 borderBottom={selectedNewsId === item.id ? "red" : "none"}
//                 key={item.id}
//                 onClick={() => setSelectedNewsId(item.id)}
//               >
//                 <TextBox>{item.title}</TextBox>
//               </Button>
//             ))}
//           </HorizontalContent>
//           {selectedNewsId !== null && (
//             <VerticalContent
//               width="whole"
//               height="minMedium"
//               backgroundColor="white"
//             >
//               <HorizontalContent
//                 height="minXSmall"
//                 backgroundColor="white"
//                 justifyContent="spaceBetween"
//               >
//                 <HorizontalContent height="minXSmall" backgroundColor="white">
//                   <div
//                     style={{
//                       padding: "0 7%",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "44px",
//                         height: "44px",
//                         borderRadius: "50px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         boxShadow: "rgba(33, 33, 33, 0.16) 0px 0px 2px",
//                       }}
//                     >
//                       <LittleIcon
//                         width="xLarge"
//                         height="large"
//                         src={newsData[selectedNewsId - 1].info.avatar}
//                         alt={newsData[selectedNewsId - 1].info.name}
//                       />
//                     </div>
//                   </div>

//                   <VerticalContent
//                     width="whole"
//                     height="minXSmall"
//                     backgroundColor="white"
//                     justifyContent="center"
//                   >
//                     <InfoBox
//                       style={{
//                         fontSize: "10px",
//                         color: "#606060",
//                       }}
//                     >
//                       {newsData[selectedNewsId - 1].info.name}
//                     </InfoBox>
//                     <InfoBox
//                       style={{
//                         fontSize: "10px",
//                         color: "#979797",
//                       }}
//                     >
//                       {newsData[selectedNewsId - 1].info.email}
//                     </InfoBox>
//                   </VerticalContent>
//                 </HorizontalContent>
//                 <div style={{ margin: "0 10%" }}>
//                   <LittleIcon
//                     src={birdIcon}
//                     alt="email"
//                     width="medium"
//                     height="xSmall"
//                   />
//                 </div>
//               </HorizontalContent>
//               <HorizontalContent backgroundColor="white">
//                 <div
//                   style={{
//                     width: "249px",
//                     fontSize: "10px",
//                     overflow: "hidden",
//                     display: "-webkit-box",
//                     WebkitBoxOrient: "vertical",
//                     WebkitLineClamp: 5,
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {newsData[selectedNewsId - 1].info.text}
//                 </div>
//               </HorizontalContent>
//               <HorizontalContent height="midSmall" backgroundColor="white">
//                 <HorizontalContent
//                   width="eighth"
//                   height="midSmall"
//                   backgroundColor="white"
//                 >
//                   <img
//                     src={newsData[selectedNewsId - 1].info.img1}
//                     style={{ width: "50%", objectFit: "cover", margin: "0" }}
//                   />
//                   <img
//                     src={newsData[selectedNewsId - 1].info.img2}
//                     style={{ width: "50%", objectFit: "cover", margin: "0" }}
//                   />
//                 </HorizontalContent>
//               </HorizontalContent>
//             </VerticalContent>
//           )}
//           <HorizontalContent height="minXSmall" backgroundColor="white">
//             <div style={{ marginRight: "auto", display: "flex" }}>
//               <div style={{ margin: "0 35px" }}>
//                 <LittleIcon src={likeIcon} width="medium" />
//               </div>
//               <div style={{ margin: "0 10px" }}>
//                 <LittleIcon src={shareIcon} width="midMedium" height="xSmall" />
//               </div>
//             </div>
//           </HorizontalContent>
//           <HorizontalContent height="sSmall">
//             <Button
//               width="whole"
//               height="xLarge"
//               borderRadius="small"
//               backgroundColor="red"
//               color="white"
//               fontSize="large"
//             >
//               <TextBox>
//                 <p
//                   style={{
//                     fontFamily: "'Corbel Light', 'DengXian Light', sans-serif",
//                   }}
//                 >
//                   Clasificados
//                 </p>
//               </TextBox>
//             </Button>
//           </HorizontalContent>
//         </VerticalContent>
//       </HorizontalContent>
//       <Footer />
//     </div>
//   );
// };
// export default Home;

// export const query = graphql`
//   query {
//     bannerImage: file(relativePath: { eq: "icon/home/banner.png" }) {
//       childImageSharp {
//         gatsbyImageData(
//           width: 800
//           placeholder: BLURRED
//           formats: [AUTO, WEBP, AVIF]
//         )
//       }
//     }
//     plateImages: allFile(
//       filter: { relativePath: { regex: "/icon/home/plate/" } }
//     ) {
//       nodes {
//         childImageSharp {
//           gatsbyImageData(
//             width: 300
//             placeholder: BLURRED
//             formats: [AUTO, WEBP, AVIF]
//           )
//         }
//       }
//     }
//   }
// `;

import * as React from "react";
import Header from "../components/header/index";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { HorizontalContent, VerticalContent, BGImg } from "../components/utils";
import Button from "../components/button";
import TextBox from "../components/textBox";
import { bannerData, plateData, newsData } from "../components/data/homeData";
import { Mask, PinToBottom, InfoBox } from "../components/utils/style";
import LittleIcon from "../components/littleIcon";
import birdIcon from "../components/icon/home/news/bird.png";
import likeIcon from "../components/icon/home/news/like.png";
import shareIcon from "../components/icon/home/news/share.png";
import Calendar from "../components/calendar";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface HomeProps {
  data: {
    bannerImage: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData; // 你可以使用正确的类型如 IGatsbyImageData
      };
    };
    plateImages: {
      nodes: Array<{
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData; // 你可以使用正确的类型如 IGatsbyImageData
        };
      }>;
    };
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [selectedNewsId, setSelectedNewsId] = React.useState<number | null>(1);
  console.log("gaphqlData:", data);

  // 获取图像数据
  // const bannerImage = getImage(
  //   data.bannerImage.childImageSharp.gatsbyImageData
  // );
  const plateImages = data.plateImages.nodes.map((node) =>
    getImage(node.childImageSharp.gatsbyImageData)
  );

  return (
    <div>
      <Header />
      <Navigation />
      <HorizontalContent height="large" justifyContent="spaceBetween">
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
          <VerticalContent width="whole" height="midLarge" margin="0">
            <Calendar />
          </VerticalContent>
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
                backgroundColor="transparentRed"
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
            {plateData.map(
              (item, index) =>
                plateImages[index] && (
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
                    {/* <BGImg src={item.icon} alt={item.name} shouldScale></BGImg> */}
                    <GatsbyImage
                      image={plateImages[index]}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        margin: 0,
                      }}
                    />
                    <Mask />
                    <TextBox>{item.name}</TextBox>
                  </Button>
                )
            )}
          </HorizontalContent>
        </VerticalContent>

        {/* 右侧 */}
        <VerticalContent
          width="quarter"
          height="large"
          margin="0 3%"
          minWidth="small"
        >
          <HorizontalContent
            height="minXSmall"
            backgroundColor="white"
            borderBottom="1px solid #E6ECF0"
          >
            {newsData.map((item) => (
              <Button
                width="realThird"
                height="midMedium"
                border="none"
                borderRadius="none"
                fontWeight="medium"
                borderBottom={selectedNewsId === item.id ? "red" : "none"}
                key={item.id}
                onClick={() => setSelectedNewsId(item.id)}
              >
                {/* TODO:切换抖动 */}
                <TextBox>{item.title}</TextBox>
              </Button>
            ))}
          </HorizontalContent>
          {selectedNewsId !== null && (
            <VerticalContent
              width="whole"
              height="minMedium"
              backgroundColor="white"
            >
              <HorizontalContent
                height="minXSmall"
                backgroundColor="white"
                justifyContent="spaceBetween"
              >
                <HorizontalContent height="minXSmall" backgroundColor="white">
                  <div
                    style={{
                      padding: "0 7%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "rgba(33, 33, 33, 0.16) 0px 0px 2px",
                      }}
                    >
                      <LittleIcon
                        width="xLarge"
                        height="large"
                        src={newsData[selectedNewsId - 1].info.avatar}
                        alt={newsData[selectedNewsId - 1].info.name}
                      />
                    </div>
                  </div>

                  <VerticalContent
                    width="whole"
                    height="minXSmall"
                    backgroundColor="white"
                    justifyContent="center"
                  >
                    <InfoBox
                      style={{
                        fontSize: "10px",
                        color: "#606060",
                      }}
                    >
                      {newsData[selectedNewsId - 1].info.name}
                    </InfoBox>
                    <InfoBox
                      style={{
                        fontSize: "10px",
                        color: "#979797",
                      }}
                    >
                      {newsData[selectedNewsId - 1].info.email}
                    </InfoBox>
                  </VerticalContent>
                </HorizontalContent>
                <div style={{ margin: "0 10%" }}>
                  <LittleIcon
                    src={birdIcon}
                    alt="email"
                    width="medium"
                    height="xSmall"
                  />
                </div>
              </HorizontalContent>
              <HorizontalContent backgroundColor="white">
                <div
                  style={{
                    width: "249px",
                    fontSize: "10px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 5,
                    textOverflow: "ellipsis",
                  }}
                >
                  {newsData[selectedNewsId - 1].info.text}
                </div>
              </HorizontalContent>
              <HorizontalContent height="midSmall" backgroundColor="white">
                <HorizontalContent
                  width="eighth"
                  height="midSmall"
                  backgroundColor="white"
                >
                  <img
                    src={newsData[selectedNewsId - 1].info.img1}
                    style={{ width: "50%", objectFit: "cover", margin: "0" }}
                  />
                  <img
                    src={newsData[selectedNewsId - 1].info.img2}
                    style={{ width: "50%", objectFit: "cover", margin: "0" }}
                  />
                </HorizontalContent>
              </HorizontalContent>
            </VerticalContent>
          )}
          <HorizontalContent height="minXSmall" backgroundColor="white">
            <div style={{ marginRight: "auto", display: "flex" }}>
              <div style={{ margin: "0 35px" }}>
                <LittleIcon src={likeIcon} width="medium" />
              </div>
              <div style={{ margin: "0 10px" }}>
                <LittleIcon src={shareIcon} width="midMedium" height="xSmall" />
              </div>
            </div>
          </HorizontalContent>
          <HorizontalContent height="sSmall">
            <Button
              width="whole"
              height="xLarge"
              borderRadius="small"
              backgroundColor="red"
              color="white"
              fontSize="large"
            >
              <TextBox>
                <p
                  style={{
                    fontFamily: "'Corbel Light', 'DengXian Light', sans-serif",
                  }}
                >
                  Clasificados
                </p>
              </TextBox>
            </Button>
          </HorizontalContent>
        </VerticalContent>
      </HorizontalContent>
      <Footer />
    </div>
  );
};

export default Home;

export const query = graphql`
  query {
    bannerImage: allFile(
      filter: { relativePath: { regex: "/icon/home/banner/" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
    plateImages: allFile(
      filter: { relativePath: { regex: "/icon/home/plate/" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
