import {Slide} from '../../data/types';
import {SlideAction, SlideActionTypes} from '../../types/slides';
import {initialState} from '../../types/presentation';
import {
    addBlock,
    addSlide,
    deleteSlides,
    moveBlocks,
    changeSlideBackground,
    changeBlocksColor,
    blockToFront,
    upload,
} from '../actions/slides';

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
            case SlideActionTypes.CHANGE_BLOCK_COLOR:
            return changeBlocksColor(state, action.payload.selection, action.payload.newColor);
        case SlideActionTypes.BLOCK_TO_FRONT:
            return blockToFront(state, action.payload);
        case SlideActionTypes.UPLOAD:
            return upload(action.payload);
        default:
            return state;
    }
}

export {
    slidesReducer
}