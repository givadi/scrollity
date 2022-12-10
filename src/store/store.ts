import {createStore} from 'redux';
import {presentationReducer} from "./reducers/presentationReducer";
import {getState} from "../data/testData_v2";

const store = createStore(presentationReducer, getState());

export default store;