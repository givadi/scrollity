import {Slide} from './slides';

type Selection = {
    selectedSlideId: string,
    selectedBlocksId: Array<string>
}

export enum SelectedSlidesTypes {
    SELECT_SLIDE = 'SELECT_SLIDE',
    SELECT_SLIDES = 'SELECT_SLIDES',
    UPDATE_AFTER_DELETING_SLIDES = 'UPDATE_AFTER_DELETING_SLIDES',
    SELECT_BLOCK = 'SELECT_BLOCK',
    SELECT_BLOCKS = 'SELECT_BLOCKS',
    CLEAR_SELECTED_BLOCKS = 'CLEAR_SELECTED_BLOCKS',
    UPLOAD = 'UPLOAD'
}

interface SelectSlideAction {
    type: SelectedSlidesTypes.SELECT_SLIDE,
    payload: string
}

interface SelectSlidesAction {
    type: SelectedSlidesTypes.SELECT_SLIDES,
    payload: string
}

interface UpdateAfterDeletingSlidesAction {
    type: SelectedSlidesTypes.UPDATE_AFTER_DELETING_SLIDES,
    payload: Array<Slide>
}

interface SelectBlockAction {
    type: SelectedSlidesTypes.SELECT_BLOCK,
    payload: string
}

interface SelectBlocksAction {
    type: SelectedSlidesTypes.SELECT_BLOCKS,
    payload: string
}

interface ClearSelectedBlocksAction {
    type: SelectedSlidesTypes.CLEAR_SELECTED_BLOCKS
}

type SelectedBlocks = {
    selectedBlocks: string;
}

interface SelectSlideAction {
    type: SelectedSlidesTypes.SELECT_SLIDE,
    payload: string
}

interface UpdateAfterDeletingSlidesAction {
    type: SelectedSlidesTypes.UPDATE_AFTER_DELETING_SLIDES,
    payload: Array<Slide>
}

interface SelectBlockAction {
    type: SelectedSlidesTypes.SELECT_BLOCK,
    payload: string
}

interface SelectBlocksAction {
    type: SelectedSlidesTypes.SELECT_BLOCKS,
    payload: string
}

interface ClearSelectedBlocksAction {
    type: SelectedSlidesTypes.CLEAR_SELECTED_BLOCKS
}

export type SelectedSlidesAction = SelectSlideAction
    | UpdateAfterDeletingSlidesAction
    | SelectBlockAction
    | SelectBlocksAction
    | ClearSelectedBlocksAction
    | SelectSlidesAction;

export type {
    Selection,
    SelectedBlocks
}
