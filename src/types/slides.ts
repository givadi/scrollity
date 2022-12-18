export enum SlideActionTypes {
    ADD_SLIDE = 'ADD_SLIDE',
    DELETE_SLIDES = 'DELETE_SLIDES',
    SELECT_SLIDE = 'SELECT_SLIDE',
}

interface AddSlideAction {
    type: SlideActionTypes.ADD_SLIDE
}

interface SelectSlideAction {
    type: SlideActionTypes.SELECT_SLIDE,
    payload: string
}

interface RemoveSlideAction {
    type: SlideActionTypes.DELETE_SLIDES,
}

export type SlideAction = AddSlideAction | SelectSlideAction | RemoveSlideAction;


