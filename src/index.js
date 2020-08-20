import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import Welcome from './components/welcome'
import Signup from './components/auth/sign-up';
import reducers from './reducers';
import Feature from './components/feature';
import Signout from './components/auth/sign-out';
import Signin from './components/auth/sign-in';

const store = createStore(
    reducers,
    {auth: {authenticated: localStorage.getItem('token')}},
    applyMiddleware(reduxThunk)
);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Welcome} />
                <Route path='/signup' component={Signup} />
                <Route path='/feature' component={Feature} />
                <Route path='/signout' component={Signout} />
                <Route path='/signin' component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
