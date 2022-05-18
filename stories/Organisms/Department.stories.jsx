import { Department } from "../../src/components/ComponentIndex";
import { scbData, sdData } from "../../src/data/dataIndex";

export default {
  title: "Organisms/Department",
  component: Department,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
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
