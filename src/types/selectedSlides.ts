import {Slide} from './slides';

type Selection = {
    selectedSlideId: string,
    selectedBlocksId: Array<string>
}

export enum SelectedSlidesTypes {
    SELECT_SLIDE = 'SELECT_SLIDE',
    UPDATE_AFTER_DELETING_SLIDES = 'UPDATE_AFTER_DELETING_SLIDES',
    SELECT_BLOCK = 'SELECT_BLOCK',
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

export type SelectedSlidesAction = SelectSlideAction | UpdateAfterDeletingSlidesAction | SelectBlockAction;

export type {
    Selection
}