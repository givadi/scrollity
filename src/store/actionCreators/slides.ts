import {SlideActionTypes, SlideBackground} from '../../types/slides';
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

export const changeFontSize = (slideId: string, newFontBlock: BlockType, newFontSize: number) => ({
    type: SlideActionTypes.CHANGE_FONT_SIZE,
    payload: {
        slideId,
       newFontBlock,
        newFontSize
    }
});

export const changeBackground = (selectedSlides: Array<string> | Selection, newBackground: SlideBackground) => ({
    type: SlideActionTypes.CHANGE_BACKGROUND,
    payload: {
        selectedSlides: selectedSlides,
        newBackground: newBackground
    },
});