import { BlockType } from '../../types/blocks';
import {SelectedBlocks, Selection} from '../../types/selectedSlides';
import {Slide} from '../../types/slides';

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

function getSelectedBlocks(selectedSlides: Array<string> | Selection, slideId: string): Array<string> {
    if (selectedSlides.includes(slideId)) {
        if (newSelectedSlides.length > 1) {
            newSelectedSlides.splice(newSelectedSlides.indexOf(slideId), 1);
        }
    } else {
        newSelectedSlides.push(slideId);
    }
    if (Array.isArray(selectedSlides)) {
        const selectedBlocks

    }
}

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
    getSelectedBlocksIds,
    getSelectedBlocks
}