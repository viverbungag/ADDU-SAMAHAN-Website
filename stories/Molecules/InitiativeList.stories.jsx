import { InitiativeList } from "../../src/components/ComponentIndex";
import { inData } from "../../src/sampleData/dataIndex";

export default {
  title: "Molecules/InitiativeList",
  component: InitiativeList,
};

export const Main = {
  args: {
    selectedId: "initiative_1",
    data: inData,
    initialRoute: "",
  },
};
