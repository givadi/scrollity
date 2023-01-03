import {Selection} from '../../data/types';
import {initialState} from '../../types/presentation';
import {SelectedSlidesAction, SelectedSlidesTypes} from '../../types/selectedSlides';
import {selectSlide} from '../actions/selectedSlides';

function selectedSlidesReducer(
    state: Array<string> | Selection = initialState.selectedSlides,
    action: SelectedSlidesAction): Array<string> | Selection {
    switch (action.type) {
        case SelectedSlidesTypes.SELECT_SLIDE:
            return selectSlide(action.payload);
        default:
            return state;
    }
}

export {
    selectedSlidesReducer
}