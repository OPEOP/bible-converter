import * as CONST from './constants';

const currency = [
    {
        name: CONST.TALENT,
        value: CONST.TALENT_WEIGHT,
        eqName: CONST.GOLD
    },

    {
        name: CONST.MINA,
        value: CONST.TALENT_WEIGHT / 60,
        eqName: CONST.GOLD
    },

    {
        name: CONST.SHEKEL,
        value: CONST.TALENT_WEIGHT / 3000,
        eqName: CONST.GOLD
    },

    {
        name: CONST.DENARIUS,
        value: 0.004548,
        eqName: CONST.SILVER
    },

    {
        name: CONST.DRACHMA,
        value: 0.003,
        eqName: CONST.SILVER
    }
];

export default currency;