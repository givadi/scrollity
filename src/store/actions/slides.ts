import {generateId} from '../../common/functions/id';
import {
    getLastSelectedSlideId, getSelectedSlideIds,
    getSlidesByOppositeSelection,
} from '../../common/functions/slides';
import {Slide, SlideBackground} from '../../types/slides';
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

    const newSlides: Array<Slide> = slides;
    newSlides.splice(indexToInsert, 0, newSlide);

    return [...newSlides];
}

function deleteSlides(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    let newSlides = getSlidesByOppositeSelection(slides, selectedSlides);

    newSlides = newSlides.length > 0 ? newSlides : [getEmptySlide()];

    return newSlides;
}

function changeSlideBackground(
    slides: Array<Slide>,
    selectedSlides: Array<string> | Selection,
    newBackground: SlideBackground)
    : Array<Slide> {
    const selectedSlidesIdToChangeBackground: Array<string> = getSelectedSlideIds(selectedSlides);

    const newSlides = slides;

    newSlides.map((slide: Slide) => {
        if (selectedSlidesIdToChangeBackground.includes(slide.id)) {
            return slide.background = newBackground;
        }

        return slide;
    })

    return [...newSlides];
}

function addBlock(slides: Array<Slide>, slideId: string, block: BlockType): Array<Slide> {
    return slides.map((slide) => {
        if (slide.id === slideId) {
            const newBlocks = slide.data;
            newBlocks.push(block)

            return {
                ...slide,
                data: newBlocks
            }
        }

        return slide;
    });
}

export {
    addSlide,
    deleteSlides,
    getEmptySlide,
    changeSlideBackground,
    addBlock
}