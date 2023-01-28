import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { myStore } from './storeFolder/store';

import { LocalView } from './localstorage/LocalView';
import { UserView } from './localstorage/UserView';
import { UserAction } from './localstorage/UserAction';
import "./assets/localStroage.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={myStore}>
            <div className="container main">
                <LocalView />
                <div className="col-md-1"></div>
                <div className="col-md-8 view">
                    <UserView />
                    <UserAction />
                </div>
            </div>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
