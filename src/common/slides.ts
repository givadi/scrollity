import {Selection, Slide} from '../data/types';

function getSelectedSlideIds(selectedSlides: Array<string> | Selection): Array<string> {
    return Array.isArray(selectedSlides)
        ? selectedSlides
        : [selectedSlides.selectedSlideId];
}

function getLastSelectedSlideId(selectedSlides: Array<string> | Selection): string {
    const selectedSlidesId = getSelectedSlideIds(selectedSlides);
    return selectedSlidesId[selectedSlidesId.length];
}

function getFirstSelectedSlideId(selectedSlides: Array<string> | Selection): string {
    return getSelectedSlideIds(selectedSlides)[0];
}

function getSelectedSlidesById(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    return slides.filter((slide: Slide) => {
        return getSelectedSlideIds(selectedSlides).includes(slide.id);
    });
}

export {
    getSelectedSlideIds,
    getLastSelectedSlideId,
    getFirstSelectedSlideId,
    getSelectedSlidesById
}