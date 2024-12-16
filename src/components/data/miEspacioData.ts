import bgIcon from "../icon/miEspacio/c1.png";

interface ProjectData {
  id: number;
  title: string;
  uncompleted: TasksGroup;
  completed: TasksGroup;
}

interface Task {
  order: number;
  name: string;
}

interface TasksGroup {
  title: string;
  tasks: Task[];
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title: "Proyecto 1",
    uncompleted: {
      title: "Próximas tareas por vencer",
      tasks: [
        { order: 1, name: "Indicadores economicos" },
        { order: 2, name: "Boletin diario" },
      ],
    },
    completed: {
      title: "Tareas ya realizadas",
      tasks: [
        { order: 1, name: "Indicadores economicos" },
        { order: 2, name: "Boletin diario" },
      ],
    },
  },
  {
    id: 2,
    title: "Proyecto 2",
    uncompleted: {
      title: "Próximas tareas por vencer",
      tasks: [
        { order: 1, name: "Indicadores economicos" },
        { order: 2, name: "Boletin diario" },
      ],
    },
    completed: {
      title: "Tareas ya realizadas",
      tasks: [
        { order: 1, name: "Indicadores economicos" },
        { order: 2, name: "Boletin diario" },
      ],
    },
  },
  {
    id: 3,
    title: "Proyecto 3",
    uncompleted: {
      title: "Próximas tareas por vencer",
      tasks: [],
    },
    completed: {
      title: "Tareas ya realizadas",
      tasks: [],
    },
  },
];

interface PlateData {
  id: number;
  name: string;
  icon: string;
}

export const plateData: PlateData[] = [
  {
    id: 1,
    name: "Plan Estratégico Institucional",
    icon: bgIcon,
  },
  {
    id: 2,
    name: "Plantillas institucionales",
    icon: bgIcon,
  },
  {
    id: 3,
    name: "Somos DANE",
    icon: bgIcon,
  },
  {
    id: 4,
    name: "Soy servidor público",
    icon: bgIcon,
  },
  {
    id: 5,
    name: "Organigrama y directorio",
    icon: bgIcon,
  },
  {
    id: 6,
    name: "Queremos saber más de ti",
    icon: bgIcon,
  },
];
