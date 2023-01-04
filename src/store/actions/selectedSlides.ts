import {Selection, Slide} from '../../data/types';

function selectSlide(slideId: string): Array<string> | Selection {
    return {
        selectedSlideId: slideId,
        selectedBlocksId: []
    }
}

function setDefaultSelection(slides: Array<Slide>): Array<string> | Selection {
    return {
        selectedSlideId: slides[0].id,
        selectedBlocksId: []
    }
}

export {
    selectSlide,
    setDefaultSelection
}