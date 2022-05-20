import {Tabs} from "../../src/components/ComponentIndex";

export default{
    title: "Atoms/Tabs",
    component: Tabs,
    parameters:{
        backgrounds:{
            default: "ADDU Blue",
        },
    },
};

export const Selected = {
    args:{
        stylevar: "selected",
        category: "Hakdog",
    },
};
export const Unselected = {
    args:{
        stylevar: "unselected",
        category: "Hakdog",
    },
};