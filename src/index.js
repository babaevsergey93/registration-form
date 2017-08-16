import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import Backendless from 'backendless';
import { BrowserRouter } from 'react-router-dom'
import { APPLICATION_ID, SECRET_KEY } from './constants/index';
import App from './containers/App';
import store from './store/store';

// initialization database
Backendless.initApp(
    APPLICATION_ID,
    SECRET_KEY
);



render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
