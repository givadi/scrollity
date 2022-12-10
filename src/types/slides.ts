export enum SlideActionTypes {
    ADD_SLIDE = 'ADD_SLIDE',
    REMOVE_SLIDES = 'REMOVE_SLIDES',
    SELECT_SLIDE = 'SELECT_SLIDE',
}

interface AddSlideAction {
    type: SlideActionTypes.ADD_SLIDE
}

export type SlideAction = AddSlideAction;


