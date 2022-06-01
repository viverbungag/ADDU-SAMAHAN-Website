import { FAQSection } from "../../src/components/ComponentIndex";
import { eFAQData } from "../../src/data/dataIndex";

export default {
  title: "Organisms/FAQ Section",
  component: FAQSection,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
    data: eFAQData,
  },
};
