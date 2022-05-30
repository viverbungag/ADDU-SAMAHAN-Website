import { ScholarFAQ } from "../../src/components/ComponentIndex";
import { schFAQData } from "../../src/data/dataIndex";

export default{
    title:"Organisms/Scholarship FAQs",
    component:ScholarFAQ,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: schFAQData
    },  
  };