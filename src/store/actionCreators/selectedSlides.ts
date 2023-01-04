import {SelectedSlidesTypes} from '../../types/selectedSlides';
import {Slide} from '../../data/types';

export const selectSlide = (slideId: string) => (
    {
        type: SelectedSlidesTypes.SELECT_SLIDE,
        payload: slideId
    }
);

export const updateAfterDeletingSlides = (slides: Array<Slide>) => (
    {
        type: SelectedSlidesTypes.UPDATE_AFTER_DELETING_SLIDES,
        payload: slides
    }
);