import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('FETCH_FRUITS', fruitGetFetcher);
yield takeEvery('POST_FRUITS', postFruitPoster)

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an 
// action is dipatched. state = ['Apple'] sets the default 
// value of the array.
const basketReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BASKET':
            return action.payload;
        default:
            return state;
    }
}
function* fruitGetFetcher(action) {
    // replaces the need for .then and .catch
    try {
        const fruitResponse = yield axios.get('/fruit');
        // same as dispatch
        const nextAction = { type: 'SET_BASKET', payload: fruitResponse.data };
        yield put(nextAction); // trigger our reducer
    } catch (error) {
        console.log('Error making GET request');
        alert('there was a problem');
    }
}
function* postFruitPoster(action){
    try {
        yield axios.post('/fruit', action.payload);
        const nextAction = { type: 'FETCH_FRUITS' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem');
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        basketReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
