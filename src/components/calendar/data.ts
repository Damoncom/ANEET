export interface Event {
  date: string; // 使用 ISO 格式的日期字符串 'yyyy-MM-dd'
  type: "Actividades" | "Publicaciones" | "Cumpleaños";
  title: string;
  description: string;
}

export const Events: Event[] = [
  {
    date: "2024-12-12",
    type: "Actividades",
    title: "Reunión de Proyecto",
    description: "Reunión para discutir el progreso del proyecto.",
  },
  {
    date: "2024-12-12",
    type: "Publicaciones",
    title: "Nuevo Artículo Publicado",
    description: "Un nuevo artículo sobre desarrollo web ha sido publicado.",
  },
  {
    date: "2024-12-12",
    type: "Publicaciones",
    title: "2 Nuevo Artículo Publicado",
    description: "Un nuevo artículo sobre desarrollo web ha sido publicado.",
  },
  {
    date: "2024-12-12",
    type: "Publicaciones",
    title: "2 Nuevo Artículo Publicado",
    description: "Un nuevo artículo sobre desarrollo web ha sido publicado.",
  },
  {
    date: "2024-12-14",
    type: "Cumpleaños",
    title: "Cumpleaños de Juan",
    description: "Celebra el cumpleaños de Juan con una fiesta virtual.",
  },
  // 更多事件
];
