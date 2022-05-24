import { AboutTemplate } from "../../src/components/ComponentIndex";
import { scbData, sdData, abtData1, abtData2 } from "../../src/sampleData/dataIndex";

export default {
  title: "Template/About",
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
    abtData1: abtData1,
    abtData2: abtData2

  },
};
