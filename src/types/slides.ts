import {BlockPositionType, BlockType} from './blocks';
import {Selection} from './selectedSlides';

type Slide = {
    id: string,
    data: Array<BlockType>,
    background: SlideBackground,
}

type SlideBackground = {
    type: 'image'|'color',
    data: string
}

export enum SlideActionTypes {
    ADD_SLIDE = 'ADD_SLIDE',
    DELETE_SLIDES = 'DELETE_SLIDES',
    ADD_BLOCK = 'ADD_BLOCK',
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    MOVE_BLOCKS = 'MOVE_BLOCK',
    CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE',
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

interface MoveBlockAction {
    type: SlideActionTypes.MOVE_BLOCKS,
    payload: {
        slideId: string,
        blockIds: Array<string>,
        position: BlockPositionType
    }
}

interface ChangeBackgroundAction {
    type: SlideActionTypes.CHANGE_BACKGROUND,
    payload: {
        selectedSlides: Selection | Array<string>,
        newBackground: SlideBackground
    }
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
export type SlideAction = AddSlideAction | RemoveSlideAction | ChangeBackgroundAction | AddBlockAction | MoveBlockAction | ChangeFontSizeAction;

export type {
    Slide,
    SlideBackground,
}


