import * as CONST from '../constants';
import * as CONST_DIM from '../constants';

const CONVERT_UNITS = {
    [CONST.CURRENCY]: {
        [CONST_DIM.KG_GOLD]: [
            {
                name: CONST_DIM.T_GOLD,
                ratio: 0.001
            },
            {
                name: CONST_DIM.KG_GOLD,
                ratio: 1
            },
            {
                name: CONST_DIM.G_GOLD,
                ratio: 1000
            },
        ],
        [CONST_DIM.KG_SILVER]: [
            {
                name: CONST_DIM.T_SILVER,
                ratio: 0.001
            },
            {
                name: CONST_DIM.KG_SILVER,
                ratio: 1
            },
            {
                name: CONST_DIM.G_SILVER,
                ratio: 1000
            },
        ]
    },
    [CONST.WEIGHT]: [
        {
            name: CONST_DIM.T,
            ratio: 0.001
        },
        {
            name: CONST_DIM.KG,
            ratio: 1
        },
        {
            name: CONST_DIM.G,
            ratio: 1000
        },
    ],
    [CONST.LENGTH]: [
        {
            name: CONST_DIM.KM,
            ratio: 0.001
        },
        {
            name: CONST_DIM.M,
            ratio: 1
        },
        {
            name: CONST_DIM.CM,
            ratio: 100
        },
    ],
    [CONST.VOLUME]: [
        {
            name: CONST_DIM.L,
            ratio: 1
        },
        {
            name: CONST_DIM.ML,
            ratio: 1000
        },
    ]
};

export default CONVERT_UNITS;