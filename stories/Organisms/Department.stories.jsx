import { Department } from "../../src/components/ComponentIndex";
import { scbData, sdData } from "../../src/sampleData/dataIndex";

export default {
  title: "Organisms/Department",
  component: Department,
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
};

export const SamahanCentralBoard = {
  args: {
    title: scbData.title,
    offices: scbData.offices,
  },
};

export const SamahanDepartments = {
  args: {
    title: sdData.title,
    offices: sdData.offices,
  },
};
