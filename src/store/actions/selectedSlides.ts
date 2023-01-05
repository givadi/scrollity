import {Slide} from '../../types/slides';
import {Selection} from '../../types/selectedSlides';

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