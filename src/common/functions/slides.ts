import { BlockType } from '../../types/blocks';
import {SelectedBlocks, Selection} from '../../types/selectedSlides';
import {Slide} from '../../types/slides';
import store from '../../store/store';

function getSelectedSlideIds(selectedSlides: Array<string> | Selection): Array<string> {
    return Array.isArray(selectedSlides)
        ? selectedSlides
        : [selectedSlides.selectedSlideId];
}

function getLastSelectedSlideId(selectedSlides: Array<string> | Selection): string {
    const selectedSlidesId = getSelectedSlideIds(selectedSlides);
    return selectedSlidesId[selectedSlidesId.length - 1];
}

function getSlidesBySelection(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    return slides.filter((slide: Slide) => {
        return getSelectedSlideIds(selectedSlides).includes(slide.id);
    });
}

function getSlidesByOppositeSelection(slides: Array<Slide>, selectedSlides: Array<string> | Selection): Array<Slide> {
    return slides.filter((slide: Slide) => {
        return !getSelectedSlideIds(selectedSlides).includes(slide.id);
    });
}

function getLastSlideBySelection(): Slide {
    const slides = store.getState().slides;
    const selectedSlides = store.getState().selectedSlides;

    const slidesBySelection = getSlidesBySelection(slides, selectedSlides);
    return slidesBySelection[slidesBySelection.length - 1];
}

// function getSelectedBlocks(): Array<string> {
//     const selectedSlides = store.getState().selectedSlides;
//     if (Array.isArray(selectedSlides)) {
//         return [];
//     }

//     return selectedSlides.selectedBlocksId;
// }


function getSelectedBlocksIds(selectedSlides: Array<string> | Selection): Array<string> {
    if (Array.isArray(selectedSlides)) {
        return [];
    }
    return selectedSlides.selectedBlocksId;
}

function getSelectedBlocks(selectedSlides: Array<string> | Selection, slides: Array<Slide>): Array<BlockType> {
    if (Array.isArray(selectedSlides)) {
        return [];
    }

    const selectedBlocksIds = selectedSlides.selectedBlocksId;
    const selectedSlideId = selectedSlides.selectedSlideId;
    
    let newArray: BlockType[] = [];

    slides.map((slide: Slide) => {
        if (slide.id === selectedSlideId) {
            newArray = slide.data;    
        }
    });

    return newArray.filter((block: BlockType) => {
        if (selectedBlocksIds.includes(block.id)) {
            return block;
        }
    });
}


export {
    getSelectedSlideIds,
    getLastSelectedSlideId,
    getSlidesBySelection,
    getSlidesByOppositeSelection,
    getLastSlideBySelection,
    getSelectedBlocksIds,
    getSelectedBlocks
}