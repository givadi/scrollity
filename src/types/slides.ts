import {BlockType} from './blocks';
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
    ADD_BLOCK = 'ADD_BLOCK'
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

export type SlideAction = AddSlideAction | RemoveSlideAction | AddBlockAction;

export type {
    Slide,
    SlideBackground,
}