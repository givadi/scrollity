import {Slide} from '../../data/types';
import {SlideAction, SlideActionTypes} from '../../types/slides';
import {initialState} from '../../types/presentation';
import {addBlock, addSlide, deleteSlides, moveBlocks, changeSlideBackground, changeFontSize, changeFontFamily, changeFontWeight } from '../actions/slides';
// import { changeFontWeight } from '../actionCreators/slides';

function slidesReducer(state: Array<Slide> = initialState.slides, action: SlideAction): Array<Slide> {
    switch (action.type) {
        case SlideActionTypes.ADD_SLIDE:
            return addSlide(state, action.payload);
        case SlideActionTypes.DELETE_SLIDES:
            return deleteSlides(state, action.payload);
        case SlideActionTypes.CHANGE_BACKGROUND:
            return changeSlideBackground(state, action.payload.selectedSlides, action.payload.newBackground);
        case SlideActionTypes.ADD_BLOCK:
            return addBlock(state, action.payload.slideId, action.payload.newBlock);
        case SlideActionTypes.MOVE_BLOCKS:
            return moveBlocks(state, action.payload.slideId, action.payload.blockIds, action.payload.position);
        case SlideActionTypes.CHANGE_FONT_SIZE:
            return changeFontSize(state, action.payload.slideId, action.payload.newFontBlock, action.payload.newFontSize);
        case SlideActionTypes.CHANGE_FONT_FAMILY:
            return changeFontFamily(state, action.payload.slideId, action.payload.newFontBlock, action.payload.newFontFamily);
        case SlideActionTypes.CHANGE_FONT_WEIGHT:
            return changeFontWeight(state, action.payload.slideId, action.payload.newFontBlock, action.payload.newFontWeight);
                
        default:
            return state;
    }
}

export {
    slidesReducer
}