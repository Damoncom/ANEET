import twiter from "./icon/social/twiter.jpg";
import instragram from "./icon/social/instragram.jpg";
import facebook from "./icon/social/facebook.jpg";
import youtube from "./icon/social/youtube.jpg";
import sound from "./icon/social/sound.jpg";
import correo from "./icon/social/correo.jpg";

interface SocialData {
  id: number;
  name: string;
  icon: string; // 如果使用 Webpack，图像通常被处理为字符串路径
}

export const socialData: SocialData[] = [
  {
    id: 1,
    name: "twiter",
    icon: twiter,
  },
  {
    id: 2,
    name: "instragram",
    icon: instragram,
  },
  {
    id: 3,
    name: "facebook",
    icon: facebook,
  },
  {
    id: 4,
    name: "youtube",
    icon: youtube,
  },
  {
    id: 5,
    name: "sound",
    icon: sound,
  },
  {
    id: 6,
    name: "correo",
    icon: correo,
  },
];
