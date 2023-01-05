import {generateId} from '../../common/id';
import {Slide, Selection} from '../../data/types';
import {
    getLastSelectedSlideId,
    getSlidesByOppositeSelection,
} from '../../common/slides';

function getEmptySlide(): Slide {
    return {
        id: generateId(),
        data: [],
        background: {
            type: 'color',
            data: '#ffffff'
        }
    }
}

function addSlide(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    const newSlide: Slide = getEmptySlide();
    const selectedSlideId: string = getLastSelectedSlideId(selectedSlides);
    const indexToInsert: number = slides.findIndex(slide => slide.id === selectedSlideId) + 1;

    let newSlides: Array<Slide> = slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return newSlides;
}

function deleteSlides(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    let newSlides = getSlidesByOppositeSelection(slides, selectedSlides);

    newSlides = newSlides.length > 0 ? newSlides : [getEmptySlide()];

    return newSlides;
}

export {
    addSlide,
    deleteSlides,
    getEmptySlide,
}