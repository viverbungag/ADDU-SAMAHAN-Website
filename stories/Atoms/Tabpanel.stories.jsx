import {Tabpanel} from "../../src/components/ComponentIndex";
import {advoData} from "../../src/data/dataIndex";
export default {
    title: "Atoms/Tabpanel",
    component: Tabpanel,
    parameters:{
        backgrounds:{
            default: "ADDU Blue",
        },
    },
};

export const First = {
    args:{
        children: "Hello",
        value: 1,
        index: 1
    },
};

export const Second = {
    args:{
        children: "Advocatwo",
        value: 2,
        index: 2
    },
};
