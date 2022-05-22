import { DepartmentNavigation } from "../../src/components/ComponentIndex";

export default {
  title: "Molecules/Department Navigation",
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
