import {generateId} from '../../common/id';
import {
    getLastSelectedSlideId,
    getSlidesByOppositeSelection,
} from '../../common/slides';
import {Slide} from '../../types/slides';
import {BlockType} from '../../types/blocks';
import {Selection} from '../../types/selectedSlides';

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

function addBlock(slides: Array<Slide>, slideId: string, block: BlockType): Array<Slide> {
    let newSlides = slides.map((slide) => {
         if (slide.id === slideId) {
             const newBlocks = slide.data;
             newBlocks.push(block)
             console.log('slide id', slideId)

             return {
                 ...slide,
                 data: newBlocks
             }
         }

         return slide;
    });

    console.log(newSlides, 'newSlides');
    return newSlides;
}

export {
    addSlide,
    deleteSlides,
    getEmptySlide,
    addBlock
}