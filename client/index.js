import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import css from './css/home.css'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const router = (
 <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
 </Provider>
)

render(router, document.getElementById('root'));
