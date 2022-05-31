import { EmailFAQ } from "../../src/components/ComponentIndex"; 
import { eFAQData } from "../../src/data/dataIndex";

export default{
    title:"Organisms/SIS and ADDU Email FAQs",
    component:EmailFAQ,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: eFAQData
    },  
  };