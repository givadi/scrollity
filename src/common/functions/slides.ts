import {Selection} from '../../types/selectedSlides';
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

// function getSelectedBlocks(selectedSlides: Array<string> | Selection, slideId: string): Array<string> {
//     if (selectedSlides.includes(slideId)) {
//         if (newSelectedSlides.length > 1) {
//             newSelectedSlides.splice(newSelectedSlides.indexOf(slideId), 1);
//         }
//     } else {
//         newSelectedSlides.push(slideId);
//     }
//     if (Array.isArray(selectedSlides)) {
//         const selectedBlocks
//
//     }
// }

export {
    getSelectedSlideIds,
    getLastSelectedSlideId,
    getSlidesBySelection,
    getSlidesByOppositeSelection
}