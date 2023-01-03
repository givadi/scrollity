import {Selection} from '../../data/types';

function selectSlide(slideId: string): Array<string> | Selection {
    return {
        selectedSlideId: slideId,
        selectedBlocksId: []
    }
}

export {
    selectSlide
}