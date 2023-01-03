import {generateId} from '../../actions/id';
import {Slide, Selection} from '../../data/types';

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

    const selectedSlideId: string = Array.isArray(selectedSlides)
        ? selectedSlides[selectedSlides.length - 1]
        : selectedSlides.selectedSlideId;

    const indexToInsert: number = slides.findIndex(slide => slide.id === selectedSlideId) + 1;

    let newSlides: Array<Slide> = slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return newSlides;
}

function deleteSlides(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    const selectedSlidesIdToDelete: Array<string> = Array.isArray(selectedSlides)
        ? selectedSlides
        : [selectedSlides.selectedSlideId];

    let newSlides = slides.filter((slide: Slide) =>
        selectedSlidesIdToDelete.indexOf(slide.id) === -1
    );

    newSlides = newSlides.length > 0 ? newSlides : [getEmptySlide()];

    return newSlides;
}

export {
    addSlide,
    deleteSlides,
    getEmptySlide
}