import {Slide} from '../data/types';

export enum SelectedSlidesTypes {
    SELECT_SLIDE = 'SELECT_SLIDE',
    UPDATE_AFTER_DELETING_SLIDES = 'UPDATE_AFTER_DELETING_SLIDES',
}

interface SelectSlideAction {
    type: SelectedSlidesTypes.SELECT_SLIDE,
    payload: string
}

interface UpdateAfterDeletingSlidesAction {
    type: SelectedSlidesTypes.UPDATE_AFTER_DELETING_SLIDES,
    payload: Array<Slide>
}

export type SelectedSlidesAction = SelectSlideAction | UpdateAfterDeletingSlidesAction;