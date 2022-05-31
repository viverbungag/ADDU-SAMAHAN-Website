import { Carousel} from "../../src/components/ComponentIndex";
import { slideshowContent } from "../../src/data/dataIndex";
export default {
    
    title: "Molecules/Carousel",
    component: Carousel,
    parameters: {
      backgrounds: {
        default: "White",
      },
    },
  };
  
  export const Main = {
    args: {
      data : slideshowContent
    },
    
  };