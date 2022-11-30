import { Presentation, Slide } from '../data/types';
import { generateId } from './id';

function addSlide(presentation: Presentation, slideNumber: number): Presentation {
    const newSlide: Slide = { // в id нужно сгенерировать значение
                id: generateId(),
                data: [],
                background: {
                    type: 'color',
                    data: '#ffffff'
                }
            };
        
            let newSlides: Array<Slide> = presentation.slides;

            if (presentation.slides.length === slideNumber) {
                newSlides = [...presentation.slides, newSlide];
            }
            else {
                newSlides.splice(slideNumber, 0, newSlide);
            }
        
            return {
                ...presentation,
                slides: newSlides
            }
} 

export {
    addSlide
}