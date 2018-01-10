import * as CONST from './constants';
import * as CONST_DIM from '../constants';

const currency = [
    {
        name: CONST.TALENT,
        value: CONST.TALENT_WEIGHT,
        eqName: CONST_DIM.KG_GOLD
    },

    {
        name: CONST.MINA,
        value: CONST.TALENT_WEIGHT / 60,
        eqName: CONST_DIM.KG_GOLD
    },

    {
        name: CONST.SHEKEL,
        value: CONST.TALENT_WEIGHT / 3000,
        eqName: CONST_DIM.KG_GOLD
    },

    {
        name: CONST.DENARIUS,
        value: 0.004548,
        eqName: CONST_DIM.KG_SILVER
    },

    {
        name: CONST.DRACHMA,
        value: 0.003,
        eqName: CONST_DIM.KG_SILVER
    }
];

export default currency;