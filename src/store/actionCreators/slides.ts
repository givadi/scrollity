import {Slide, SlideActionTypes, SlideBackground} from '../../types/slides';
import {BlockPositionType, BlockType} from '../../types/blocks';
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

export const moveBlocks = (slideId: string, blocksIds: Array<string>, newPosition: BlockPositionType) => ({
    type: SlideActionTypes.ADD_BLOCK,
    payload: {
        slideId,
        blocksIds,
        newPosition
    }
});

export const changeBackground = (selectedSlides: Array<string> | Selection, newBackground: SlideBackground) => ({
    type: SlideActionTypes.CHANGE_BACKGROUND,
    payload: {
        selectedSlides: selectedSlides,
        newBackground: newBackground
    },
});

export const uploadSlides = (slides: Array<Slide>) => ({
    type: SlideActionTypes.UPLOAD,
    payload: slides
});

export const blockToFront = (selection: Selection) => ({
    type: SlideActionTypes.BLOCK_TO_FRONT,
    payload: selection
});