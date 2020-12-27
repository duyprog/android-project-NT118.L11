/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {combineReducers} from 'redux';

import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/index';
export const store = createStore(rootReducer, applyMiddleware(thunk));

const Index = () =>{
    console.log(store.getState())
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Index);
