import { createStore, combineReducers } from 'redux';

import cardsReducer from './reducers/cards';
import cvReducer from './reducers/cv';

const rootReducer = combineReducers({
    cards: cardsReducer,
    cv: cvReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;