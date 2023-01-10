import {Selection} from '../data/types';

export enum SlideActionTypes {
    ADD_SLIDE = 'ADD_SLIDE',
    DELETE_SLIDES = 'DELETE_SLIDES',
    ADD_BLOCK = 'ADD_BLOCK',
    CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
}

interface AddSlideAction {
    type: SlideActionTypes.ADD_SLIDE,
    payload: Selection | Array<string>
}

interface RemoveSlideAction {
    type: SlideActionTypes.DELETE_SLIDES,
    payload: Selection | Array<string>
}

interface AddBlockAction {
    type: SlideActionTypes.ADD_BLOCK,
    payload: {
        slideId: string,
        newBlock: BlockType
    }
}

interface ChangeFontSizeAction {
    type: SlideActionTypes.CHANGE_FONT_SIZE,
    payload: {
        slideId: string,
        newFontBlock: BlockType,
        newFontSize: number
    }
}

export type SlideAction = AddSlideAction | RemoveSlideAction | AddBlockAction | ChangeFontSizeAction;

export type {
    Slide,
    SlideBackground,
}