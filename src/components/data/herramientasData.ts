interface TitleData {
  title: string;
  description: string;
}

export const titleData: TitleData = {
  title: "Herramientas",
  description:
    "En esta sección podrá encontrar toda la información respecto a las herramientas y aplicativos de la entidad los cuales podrá desplegar o enlazar a través de las siguientes categorías:",
};

interface Tool {
  order: number;
  name: string;
}

interface ToolGroup {
  id: number;
  title: string;
  tools: Tool[];
}

export const toolsData: ToolGroup[] = [
  {
    id: 1,
    title: "Consulta",
    tools: [
      {
        order: 1,
        name: "Inventario de OOE",
      },
      {
        order: 2,
        name: "Geoportal",
      },
      {
        order: 3,
        name: "Biblioteca OCDE",
      },
      {
        order: 4,
        name: "Biblioteca jurídica",
      },
      {
        order: 5,
        name: "Normativa",
      },
      {
        order: 6,
        name: "Estado de cuenta",
      },
    ],
  },
  {
    id: 2,
    title: "Sistemas",
    tools: [
      {
        order: 1,
        name: "Sistema SIIAF",
      },
      {
        order: 2,
        name: "Sistema ORFEO",
      },
      {
        order: 3,
        name: "Sistema SPGI",
      },
      {
        order: 4,
        name: "Sistema de control interno...",
      },
      {
        order: 5,
        name: "Sistema de seguridad y...",
      },
    ],
  },
  {
    id: 3,
    title: "Gestión interna",
    tools: [
      {
        order: 1,
        name: "Gestión integral del talento...",
      },
      {
        order: 2,
        name: "Gestión administrativa",
      },
      {
        order: 3,
        name: "Gestión de compras públicas",
      },
    ],
  },
  {
    id: 4,
    title: "Certificaciones",
    tools: [
      {
        order: 1,
        name: "Certificaciones laborales",
      },
      {
        order: 2,
        name: "Certificaciones IPC",
      },
    ],
  },
];
