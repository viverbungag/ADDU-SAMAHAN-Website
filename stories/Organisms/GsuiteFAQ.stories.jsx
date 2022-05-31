import { GsuiteFAQ } from "../../src/components/ComponentIndex";
import { gsuiteFAQsData } from "../../src/data/dataIndex";

export default{
    title:"Organisms/ADDU Gsuite Account and Email Responses FAQ",
    component:GsuiteFAQ,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: gsuiteFAQsData
    },  
  };