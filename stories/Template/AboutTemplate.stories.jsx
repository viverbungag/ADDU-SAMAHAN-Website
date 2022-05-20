import { AboutTemplate } from "../../src/components/ComponentIndex";
import { scbData, sdData } from "../../src/sampleData/dataIndex";

export default {
  title: "Template/AboutTemplate",
  component: AboutTemplate,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
    scbData: scbData,
    sdData: sdData,
  },
};
