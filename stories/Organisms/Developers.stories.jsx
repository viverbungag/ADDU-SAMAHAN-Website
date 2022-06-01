import { Developers } from "../../src/components/ComponentIndex";
import { SysDev } from "../../src/sampleData/dataIndex"

export default {
  title: "Organisms/Developers",
  component: Developers,
};

export const Main = {
  args: {
    developers: SysDev.developers
  },
};
