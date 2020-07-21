import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import App from './App'

import './styles/main.scss';

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);