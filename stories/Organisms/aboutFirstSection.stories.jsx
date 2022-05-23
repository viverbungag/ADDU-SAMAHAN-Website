import { aboutFirstSection } from "../../src/components/ComponentIndex";
import { abtData1 } from "../../src/data/dataIndex";

export default {
  title: "Organisms/About Page First Section",
  component: aboutFirstSection,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
    data: abtData1,
        
    
  },
};
