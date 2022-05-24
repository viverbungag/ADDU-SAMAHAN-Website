import { VerticalTabs } from "../../src/components/ComponentIndex";
import { advoData } from "../../src/data/dataIndex";
export default {
  title: "Molecules/Vertical Tabs",
  component: VerticalTabs,
  parameters:{
    background: {
      default:  "ADDU Blue",
    }
  }
};

export const Main = {
  args: {
    data: advoData,
  },
};
