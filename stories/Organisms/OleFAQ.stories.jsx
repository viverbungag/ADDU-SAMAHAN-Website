import { OleFAQ } from "../../src/components/ComponentIndex";
import { oleFAQData } from "../../src/data/dataIndex";

export default{
    title:"Organisms/Online Learning Environment FAQs",
    component:OleFAQ,
    parameters:{
        backgrounds:{
            default: "ADDU Blue"
        }
    }
}

export const Main = {
    args: {
        data: oleFAQData
    },  
  };