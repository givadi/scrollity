import { Presentation, Slide, Selection } from '../data/types';
import { generateId } from './id';

function addSlide(presentation: Presentation): Presentation {
    const newSlide: Slide = { // в id нужно сгенерировать значение
        id: generateId(),
        data: [],
        background: {
            type: 'color',
            data: '#ffffff'
        }
    };

    const selectedSlides: Array<string> | Selection = presentation.selectedSlides;
    let slideIdToInsert: string = Array.isArray(selectedSlides)
        ? selectedSlides[selectedSlides.length - 1]
        : selectedSlides.selectedSlideId;

    let indexToInsert: number = presentation.slides.findIndex(slide => slide.id === slideIdToInsert) + 1;

    let newSlides: Array<Slide> = presentation.slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return {
        ...presentation,
        slides: newSlides
    }
}

export {
    addSlide
}