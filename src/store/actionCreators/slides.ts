import {SlideActionTypes} from '../../types/slides';
import {BlockType} from '../../types/blocks';
import {Selection} from '../../types/selectedSlides';

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