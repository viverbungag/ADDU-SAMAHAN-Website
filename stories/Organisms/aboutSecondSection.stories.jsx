import { AboutSecondSection } from "../../src/components/ComponentIndex";
import { abtData2 } from "../../src/data/dataIndex";

export default {
    title: "Organisms/About Page Second Section",
    component: AboutSecondSection,
    parameters: {
      backgrounds: {
        default: "ADDU Blue",
      },
    },
  };

  export const Main ={
    args:{
       data:abtData2,
    }
};