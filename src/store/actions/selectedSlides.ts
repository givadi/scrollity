import {Slide} from '../../types/slides';
import {Selection} from '../../types/selectedSlides';
import {getLastSelectedSlideId} from '../../common/functions/slides';

function selectSlide(slideId: string): Array<string> | Selection {
    return {
        selectedSlideId: slideId,
        selectedBlocksId: []
    }
}

function setDefaultSelection(slides: Array<Slide>): Array<string> | Selection {
    return {
        selectedSlideId: slides[0].id,
        selectedBlocksId: []
    }
}

function selectBlock(selectedSlides: Array<string> | Selection, blockId: string): Array<string> | Selection {
    return {
        selectedSlideId: getLastSelectedSlideId(selectedSlides),
        selectedBlocksId: [blockId]
    }
}

function selectBlocks(selectedSlides: Array<string> | Selection, blockId: string): Array<string> | Selection {
    if (!Array.isArray(selectedSlides)) {
        const newSelectionBlocksId = selectedSlides.selectedBlocksId;
        newSelectionBlocksId.push(blockId);

        return {
            ...selectedSlides,
            selectedBlocksId: newSelectionBlocksId
        }
    }

    return selectedSlides;
}

function clearSelectedBlocks(selectedSlides: Array<string> | Selection): Array<string> | Selection {
    return {
        selectedSlideId: getLastSelectedSlideId(selectedSlides),
        selectedBlocksId: []
    }
}

export {
    selectSlide,
    setDefaultSelection,
    selectBlock,
    selectBlocks,
    clearSelectedBlocks
}