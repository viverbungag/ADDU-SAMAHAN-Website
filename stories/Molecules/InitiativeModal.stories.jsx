import { InitiativeModal } from "../../src/components/ComponentIndex";
import { inData } from "../../src/sampleData/dataIndex";

export default {
  title: "Molecules/InitiativeModal",
  component: InitiativeModal,
};

export const Main = {
  args: {
    id: "initiative_1",
    data: inData.initiatives,
    initialRoute: "",
  },
};
