import { FLIP_CARD, FLIP_CARD_BACK } from './actionTypes';

export const flipCard = () => {
    return {
        type: FLIP_CARD
    };
};

export const flipCardBack = () => {
    return {
        type: FLIP_CARD_BACK
    };
};