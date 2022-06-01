import { SysDevTemplate } from "../../src/components/ComponentIndex";
import { SysDev } from "../../src/sampleData/dataIndex"

export default {
  title: "Template/SysDev Template",
  component: SysDevTemplate,
};

export const Main = {
  args: {
    developers: SysDev.developers
  },
};
