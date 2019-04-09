import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();

const Redux = (
    <Provider store={store}>
        <Main/>
    </Provider>
);


ReactDOM.render(Redux, document.getElementById('root'));