import {createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
));

export default store;