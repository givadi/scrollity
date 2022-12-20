import {createStore} from 'redux';
import {getState} from '../data/testData_v2';
import {slidesReducer} from './reducers/slidesReducer';

const store = createStore(slidesReducer, getState());

export default store;