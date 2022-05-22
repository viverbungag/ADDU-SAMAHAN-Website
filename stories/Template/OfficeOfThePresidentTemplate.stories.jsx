import { OfficeOfThePresidentTemplate } from "../../src/components/ComponentIndex";
import { pInData } from "../../src/sampleData/dataIndex";

export default {
  title: "Template/Office of the President",
  component: OfficeOfThePresidentTemplate,
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
