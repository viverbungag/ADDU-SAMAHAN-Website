import { SysDevProfile } from "../../src/components/ComponentIndex";
import { SysDevProfileSample } from "../../src/sampleData/dataIndex";

export default {
  title: "Molecules/SysDev Profile",
  component: SysDevProfile,
};

export const Main = {
  args: {
    name: SysDevProfileSample.profile.name,
    position: SysDevProfileSample.profile.position,
    course: SysDevProfileSample.profile.course,
    email: SysDevProfileSample.profile.email,
    socials: SysDevProfileSample.profile.socials,
    picture: SysDevProfileSample.profile.picture
  },
};
