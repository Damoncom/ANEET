import bannerIcon from "../icon/home/banner/banner.png";
import c1 from "../icon/home/plate/c1.png";
import c2 from "../icon/home/plate/c2.png";
import c3 from "../icon/home/plate/c3.png";
import c4 from "../icon/home/plate/c4.png";
import c5 from "../icon/home/plate/c5.png";
import c6 from "../icon/home/plate/c6.png";
import avatarIcon from "../icon/home/news/avatar.png";
import newsIcon1 from "../icon/home/news/img1.png";
import newsIcon2 from "../icon/home/news/img2.png";
interface BannerData {
  title: string;
  description: string;
  icon: string; // 如果使用 Webpack，图像通常被处理为字符串路径
}
export const bannerData: BannerData = {
  title: "LÍNEA EDITORIAL",
  description: "Temas que se quieren posicionar",
  icon: bannerIcon,
};

interface PlateData {
  id: number;
  name: string;
  icon: string;
}
export const plateData: PlateData[] = [
  {
    id: 1,
    name: "Comunicación Interna",
    icon: c1,
  },
  {
    id: 2,
    name: "Crónicas",
    icon: c2,
  },
  {
    id: 3,
    name: "Importancia del DANE en...",
    icon: c3,
  },
  {
    id: 4,
    name: "Pedagogía",
    icon: c4,
  },
  {
    id: 5,
    name: "Campañas",
    icon: c5,
  },
  {
    id: 6,
    name: "Servicios",
    icon: c6,
  },
];

interface NewsData {
  id: number;
  title: string;
  info: {
    avatar: string;
    name: string;
    email: string;
    text: string;
    img1: string;
    img2: string;
  };
}
export const newsData: NewsData[] = [
  {
    id: 1,
    title: "Twitter",
    info: {
      avatar: avatarIcon,
      name: "DANE Colombia",
      email: "@DANE_Colombia",
      text: "El 78 % del tiempo que se destina a cuidados sin remuneración de personas al interior de los hogares proviene de las mujeres. En compañía de @ONUMujeresCol presentamos la infografía Cuidado no remunerado, la igualdad de género inicia en el hogar  https://bit.ly/2Ie8kLJ",
      img1: newsIcon1,
      img2: newsIcon2,
    },
  },
  {
    id: 2,
    title: "+Visto",
    info: {
      avatar: avatarIcon,
      name: "Damon Salvatore",
      email: "@Damon_Salvatore",
      text: "El 78 % del tiempo que se destina a cuidados sin remuneración de personas al interior de los hogares proviene de las mujeres. En compañía de @ONUMujeresCol presentamos la infografía Cuidado no remunerado, la igualdad de género inicia en el hogar  https://bit.ly/2Ie8kLJ",
      img1: newsIcon1,
      img2: newsIcon2,
    },
  },
  {
    id: 3,
    title: "Medios",
    info: {
      avatar: avatarIcon,
      name: "Niklaus Mikaelson",
      email: "@Niklaus_Mikaelson",
      text: "El 78 % del tiempo que se destina a cuidados sin remuneración de personas al interior de los hogares proviene de las mujeres. En compañía de @ONUMujeresCol presentamos la infografía Cuidado no remunerado, la igualdad de género inicia en el hogar  https://bit.ly/2Ie8kLJ",
      img1: newsIcon1,
      img2: newsIcon2,
    },
  },
];
