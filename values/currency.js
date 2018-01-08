import * as CONST from './constants';

export const talent = {
    name: CONST.TALENT,
    value: 26.027,
    eqName: CONST.GOLD
};

export const mina = {
    name: CONST.MINA,
    value: talent.value/60,
    eqName: CONST.GOLD
};

export const shekel = {
    name: CONST.SHEKEL,
    value: talent.value/3000,
    eqName: CONST.GOLD
};

export const denarius = {
    name: CONST.DENARIUS,
    value: 0.004548,
    eqName: CONST.SILVER
};

export const drachma = {
    name: CONST.DRACHMA,
    value: 0.003,
    eqName: CONST.SILVER
};