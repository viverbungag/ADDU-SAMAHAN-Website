import DepartmentNavigation from "../../src/components/Molecules/DepartmentNavigation/DepartmentNavigation";

export default {
  title: "Molecules/DepartmentNavigation",
  component: DepartmentNavigation,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
    departmentTitle: "DEPARTMENT TITLE",
    buttonLabel: "LEARN MORE",
  },
};
