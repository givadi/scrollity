import {Slide} from '../../types/slides';
import {Selection} from '../../types/selectedSlides';
import {getLastSelectedSlideId, getSelectedSlideIds} from '../../common/functions/slides';

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
        newSelectionBlocksId.includes(blockId)
            ? newSelectionBlocksId.splice(newSelectionBlocksId.indexOf(blockId), 1)
            : newSelectionBlocksId.push(blockId);

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

function selectSlides(selectedSlides: Array<string> | Selection, slideId: string): Array<string> | Selection {
    const newSelectedSlides = getSelectedSlideIds(selectedSlides);
    if (newSelectedSlides.includes(slideId)) {
        if (newSelectedSlides.length > 1) {
            newSelectedSlides.splice(newSelectedSlides.indexOf(slideId), 1);
        }
    } else {
        newSelectedSlides.push(slideId);
    }

    return [...newSelectedSlides];
}

export {
    selectSlide,
    setDefaultSelection,
    selectBlock,
    selectBlocks,
    clearSelectedBlocks,
    selectSlides,
}