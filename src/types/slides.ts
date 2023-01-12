import {BlockPositionType, BlockSizeType, BlockType} from './blocks';
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
    RESIZE_BLOCKS = 'RESIZE_BLOCKS',
    CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE',
    CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY',
    CHANGE_FONT_WEIGHT = 'CHANGE_FONT_WEIGHT',
    CHANGE_FONT_STYLE = 'CHANGE_FONT_STYLE',
    CHANGE_TEXT_BLOCK = 'CHANGE_TEXT_BLOCK',
    CHANGE_BLOCK_COLOR = 'CHANGE_BLOCK_COLOR',
    CHANGE_BLOCK_BORDER = 'CHANGE_BLOCK_BORDER',
    BLOCK_TO_FRONT = 'BLOCK_TO_FRONT',
    UPLOAD = 'UPLOAD',
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
        blocksIds: Array<string>,
        newPosition: BlockPositionType
    }
}

interface ResizeBlockAction {
    type: SlideActionTypes.RESIZE_BLOCKS,
    payload: {
        slideId: string,
        blocksIds: Array<string>,
        newSize: BlockSizeType
    }
}

interface ChangeBackgroundAction {
    type: SlideActionTypes.CHANGE_BACKGROUND,
    payload: {
        selectedSlides: Selection | Array<string>,
        newBackground: SlideBackground
    }
}

interface ChangeBlocksColorAction {
    type: SlideActionTypes.CHANGE_BLOCK_COLOR,
    payload: {
        selection: Selection,
        newColor: string
    }
}

interface ChangeBlocksBorderAction {
    type: SlideActionTypes.CHANGE_BLOCK_BORDER,
    payload: {
        selection: Selection,
        newColor: string
    }
}

interface BlockToFrontAction {
    type: SlideActionTypes.BLOCK_TO_FRONT,
    payload: Selection
}

interface UploadAction {
    type: SlideActionTypes.UPLOAD,
    payload: Array<Slide>
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

interface ChangeTextBlockAction {
    type: SlideActionTypes.CHANGE_TEXT_BLOCK,
    payload: {
        slideId: string,
        newFontBlock: BlockType,
        chars: string
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

interface ChangeFontFamilyAction {
    type: SlideActionTypes.CHANGE_FONT_FAMILY,
    payload: {
        slideId: string,
        newFontBlock: BlockType,
        newFontFamily: string
    }
}

interface ChangeFontWeightAction {
    type: SlideActionTypes.CHANGE_FONT_WEIGHT,
    payload: {
        slideId: string,
        newFontBlock: BlockType,
        newFontWeight: string
    }
}

interface ChangeFontStyleAction {
    type: SlideActionTypes.CHANGE_FONT_STYLE,
    payload: {
        slideId: string,
        newFontBlock: BlockType,
        newFontWeight: string
    }
}

export type SlideAction = AddSlideAction
    | RemoveSlideAction
    | ChangeBackgroundAction
    | AddBlockAction
    | UploadAction
    | MoveBlockAction
    | BlockToFrontAction
    | ChangeBlocksColorAction
    | ChangeBlocksBorderAction
    | ChangeFontSizeAction
    | ChangeFontFamilyAction
    | ChangeFontWeightAction
    | ChangeFontStyleAction
    | ChangeTextBlockAction
    | ResizeBlockAction;

export type {
    Slide,
    SlideBackground,
}


