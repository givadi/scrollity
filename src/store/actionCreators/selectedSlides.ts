import {SelectedSlidesTypes} from '../../types/selectedSlides';

export const selectSlide = (slideId: string) => (
    {
        type: SelectedSlidesTypes.SELECT_SLIDE,
        payload: slideId
    }
);