import { InformationSection } from "../../src/components/ComponentIndex";
import { information } from "../../src/sampleData/dataIndex";

export default {
  title: "Organisms/Information Section",
  component: InformationSection,
};

export const Main = {
  args: {information: information.informationTitle}
};