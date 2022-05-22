import { OfficeOfThePresidentTemplate } from "../../src/components/ComponentIndex";
import { pInData } from "../../src/sampleData/dataIndex";

export default {
  title: "Template/Office of the President",
  component: OfficeOfThePresidentTemplate,
};

export const Main = {
  args: {
    id: "",
    data: pInData,
    initialRoute: "",
  },
};
