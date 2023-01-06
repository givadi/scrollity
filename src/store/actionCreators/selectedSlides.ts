import {SelectedSlidesTypes} from '../../types/selectedSlides';
import {Slide} from '../../types/slides';

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

export const selectBlock = (blockId: string) => (
    {
        type: SelectedSlidesTypes.SELECT_BLOCK,
        payload: blockId
    }
);

export const selectBlocks = (blockId: string) => (
    {
        type: SelectedSlidesTypes.SELECT_BLOCKS,
        payload: blockId
    }
);

export const clearSelectedBlocks = () => (
    {
        type: SelectedSlidesTypes.CLEAR_SELECTED_BLOCKS
    }
);