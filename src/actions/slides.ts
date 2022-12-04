import { Presentation, Slide, Selection } from '../data/types';
import { generateId } from './id';

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

function selectSlide(presentation: Presentation, slideId: string): Presentation {
    console.log(presentation.selectedSlides)
    return {
        ...presentation,
        selectedSlides: {
            selectedSlideId: slideId,
            selectedBlocksId: []
        }
    }
}

function addSlide(presentation: Presentation): Presentation {
    const newSlide: Slide = getEmptySlide();

    const selectedSlides: Array<string> | Selection = presentation.selectedSlides;
    const selectedSlideId: string = Array.isArray(selectedSlides)
        ? selectedSlides[selectedSlides.length - 1]
        : selectedSlides.selectedSlideId;

    const indexToInsert: number = presentation.slides.findIndex(slide => slide.id === selectedSlideId) + 1;

    let newSlides: Array<Slide> = presentation.slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return {
        ...presentation,
        slides: newSlides,
        selectedSlides: {
            selectedSlideId: newSlide.id,
            selectedBlocksId: []
        }
    }
}

function deleteSlides(presentation: Presentation): Presentation {
    const selectedSlides: Array<string> | Selection = presentation.selectedSlides;

    const selectedSlidesIdToDelete: Array<string> = Array.isArray(selectedSlides)
        ? selectedSlides
        : [selectedSlides.selectedSlideId];

    let newSlides = presentation.slides.filter((slide: Slide) => 
        selectedSlidesIdToDelete.indexOf(slide.id) === -1
    );

    newSlides = newSlides.length > 0 ? newSlides : [getEmptySlide()]; 

    return {
        ...presentation,
        slides: newSlides,
        selectedSlides: {
            selectedSlideId: newSlides[0].id,
            selectedBlocksId: []
        }
    }
}

export {
    selectSlide,
    addSlide,
    deleteSlides
}