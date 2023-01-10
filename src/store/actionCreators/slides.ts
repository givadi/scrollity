import {SlideActionTypes} from '../../types/slides';
import {Selection} from '../../data/types';

export const addSlide = (selectedSlides: Array<string> | Selection) => ({
    type: SlideActionTypes.ADD_SLIDE,
    payload: selectedSlides
});

export const deleteSlides = (selectedSlides: Array<string> | Selection) => ({
    type: SlideActionTypes.DELETE_SLIDES,
    payload: selectedSlides
});

export const addBlock = (slideId: string, newBlock: BlockType) => ({
    type: SlideActionTypes.ADD_BLOCK,
    payload: {
        slideId,
        newBlock
    }
});

export const changeFontSize = (slideId: string, newBlock: BlockType) => ({
    type: SlideActionTypes.CHANGE_FONT_SIZE,
    payload: {
        slideId,
        newBlock
    }
});
