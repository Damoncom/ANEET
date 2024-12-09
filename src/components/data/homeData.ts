import bannerIcon from "../icon/home/banner.png";
import c1 from "../icon/home/plate/c1.png";
import c2 from "../icon/home/plate/c2.png";
import c3 from "../icon/home/plate/c3.png";
import c4 from "../icon/home/plate/c4.png";
import c5 from "../icon/home/plate/c5.png";
import c6 from "../icon/home/plate/c6.png";

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
