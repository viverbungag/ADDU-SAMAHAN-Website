import { OfficeInitiative } from "../../src/components/ComponentIndex";
import { pInData } from "../../src/sampleData/dataIndex";

export default {
  title: "Organisms/Office Initiative",
  component: OfficeInitiative,
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
};
export const ClickedNone = {
  args: {
    id: "",
    data: pInData,
    initialRoute: "",
  },
};

export const ClickedInitiative1 = {
  args: {
    id: "initiative_1",
    data: pInData,
    initialRoute: "",
  },
};
