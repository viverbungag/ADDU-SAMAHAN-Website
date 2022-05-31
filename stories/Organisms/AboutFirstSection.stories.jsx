import { AboutFirstSection } from "../../src/components/ComponentIndex";
import { abtData1 } from "../../src/data/dataIndex";
import { slideshowContent } from "../../src/data/dataIndex";

export default {
  title: "Organisms/About Page First Section",
  component: AboutFirstSection,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
    data: abtData1,
    carouselPics: slideshowContent
        
    
  },
};
