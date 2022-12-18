import {Presentation} from '../../data/types';
import {SlideAction, SlideActionTypes} from '../../types/slides';
import {initialState} from '../../types/presentation';
import {addSlide, deleteSlides, selectSlide} from '../actions/slides';

function slidesReducer(state: Presentation = initialState, action: SlideAction): Presentation {
    switch (action.type) {
        case SlideActionTypes.ADD_SLIDE:
            return addSlide(state);
        case SlideActionTypes.DELETE_SLIDES:
            return deleteSlides(state);
        case SlideActionTypes.SELECT_SLIDE:
            return selectSlide(state, action.payload);
        default:
            return state;
    }
}

export {
    slidesReducer
}