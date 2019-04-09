import { FLIP_CARD, FLIP_CARD_BACK } from '../actions/actionTypes';

const initialState = {
    cardFlipped:false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIP_CARD:
            return {
                ...state,
                cardFlipped:true
            };
        case FLIP_CARD_BACK:
            return {
              ...state,
              cardFlipped:false
            };
        default:
            return state;
    }
};

export default reducer;