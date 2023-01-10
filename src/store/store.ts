import {createStore} from 'redux';
import {getState} from '../data/testData_v2';
import {rootReducer} from './reducers/reducer';

const store = createStore(rootReducer, getState());

export default store;