import {combineReducers} from 'redux';
import {slidesReducer} from './slidesReducer';
import {nameReducer} from './nameReducer';
import {selectedSlidesReducer} from './selectedSlidesReducer';

export const rootReducer = combineReducers({
    name: nameReducer,
    slides: slidesReducer,
    selectedSlides: selectedSlidesReducer
})