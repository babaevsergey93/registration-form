import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import store from './store/store';
import { Provider } from 'react-redux'
import Backendless from 'backendless';
import { APPLICATION_ID, SECRET_KEY } from './constants/index';

// initialization database
Backendless.initApp(
    APPLICATION_ID,
    SECRET_KEY
);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
