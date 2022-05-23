import { Officer } from "../../src/components/ComponentIndex";

export default {
  title: "Atoms/Officer",
  component: Officer,
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
};

export const Main = {
  args: {
    name: "Patrick Matayabas",
    position: "Sysdev Director",
    imageSrc:
      "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
  },
};
