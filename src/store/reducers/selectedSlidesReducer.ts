import {Selection} from '../../types/selectedSlides';
import {initialState} from '../../types/presentation';
import {SelectedSlidesAction, SelectedSlidesTypes} from '../../types/selectedSlides';
import {selectSlide, setDefaultSelection} from '../actions/selectedSlides';

function selectedSlidesReducer(
    state: Array<string> | Selection = initialState.selectedSlides,
    action: SelectedSlidesAction): Array<string> | Selection {
    switch (action.type) {
        case SelectedSlidesTypes.SELECT_SLIDE:
            return selectSlide(action.payload);
        case SelectedSlidesTypes.UPDATE_AFTER_DELETING_SLIDES:
            return setDefaultSelection(action.payload);
        default:
            return state;
    }
}

export {
    selectedSlidesReducer
}