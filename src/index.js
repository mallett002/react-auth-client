import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import Welcome from './components/welcome'
import Signup from './components/auth/sign-up';
import reducers from './reducers';

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/signup' component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>

    ,
    document.querySelector('#root')
);
