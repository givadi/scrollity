import {Slide} from '../../data/types';
import {SlideAction, SlideActionTypes} from '../../types/slides';
import {initialState} from '../../types/presentation';
import {addBlock, addSlide, changeFontSize, deleteSlides} from '../actions/slides';

function slidesReducer(state: Array<Slide> = initialState.slides, action: SlideAction): Array<Slide> {
    switch (action.type) {
        case SlideActionTypes.ADD_SLIDE:
            return addSlide(state, action.payload);
        case SlideActionTypes.DELETE_SLIDES:
            return deleteSlides(state, action.payload);
        case SlideActionTypes.ADD_BLOCK:
            return addBlock(state, action.payload.slideId, action.payload.newBlock);
        case SlideActionTypes.CHANGE_FONT_SIZE:
            console.log('newFontBlock', action.payload.newFontBlock)
        return changeFontSize(state, action.payload.slideId, action.payload.newFontBlock, action.payload.newFontSize);
        default:
            return state;
    }
}

export {
    slidesReducer
}