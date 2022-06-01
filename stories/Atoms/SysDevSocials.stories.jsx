import { SysDevSocials } from "../../src/components/ComponentIndex";
import { SysDevProfileSample } from "../../src/sampleData/dataIndex";

export default {
  title: "Atoms/SysDev Socials",
  component: SysDevSocials,
};

export const Main = {
  args: {
    socials: SysDevProfileSample.profile.socials,
  },
};
