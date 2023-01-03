export enum SelectedSlidesTypes {
    SELECT_SLIDE = 'SELECT_SLIDE',
}

interface SelectSlideAction {
    type: SelectedSlidesTypes.SELECT_SLIDE,
    payload: string
}

export type SelectedSlidesAction = SelectSlideAction;