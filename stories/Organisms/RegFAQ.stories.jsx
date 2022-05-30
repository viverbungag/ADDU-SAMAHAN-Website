import { RegFAQ } from "../../src/components/ComponentIndex";
import { regFAQData } from "../../src/data/dataIndex";

export default{
    title:"Organisms/Enrollment and Registration FAQs",
    component:RegFAQ,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: regFAQData
    },  
  };