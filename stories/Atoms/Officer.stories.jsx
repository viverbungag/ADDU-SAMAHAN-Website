import Officer from "../../src/components/Atoms/Officer/Officer";

export default {
  title: "Atoms/Officer",
  component: Officer,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const WithoutImage = {
  args: {
    name: "Patrick Matayabas",
    position: "Sysdev Director",
  },
};

export const WithImage = {
  args: {
    name: "Patrick Matayabas",
    position: "Sysdev Director",
    imageSrc:
      "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
  },
};
