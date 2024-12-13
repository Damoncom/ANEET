interface TitleData {
  title: string;
  description: string;
}

export const titleData: TitleData = {
  title: "Herramientas",
  description:
    "En esta sección podrá encontrar toda la información respecto a las herramientas y aplicativos de la entidad los cuales podrá desplegar o enlazar a través de las siguientes categorías:",
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
];
