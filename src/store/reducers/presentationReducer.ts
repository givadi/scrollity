import {Presentation, Selection, Slide} from '../../data/types';
import {SlideAction, SlideActionTypes} from "../../types/slides";
import {getEmptySlide} from "../../actions/slides";

const initialState: Presentation = {
    name: 'Untitled',
    slides: [getEmptySlide()],
    selectedSlides: []
}

function presentationReducer(state: Presentation = initialState, action: SlideAction): Presentation {
    console.log(action.type, 'action style')
    switch (action.type) {
        case SlideActionTypes.ADD_SLIDE:
            const newSlide: Slide = getEmptySlide();

            const selectedSlides: Array<string> | Selection = state.selectedSlides;
            const selectedSlideId: string = Array.isArray(selectedSlides)
                ? selectedSlides[selectedSlides.length - 1]
                : selectedSlides.selectedSlideId;

            const indexToInsert: number = state.slides.findIndex(slide => slide.id === selectedSlideId) + 1;

            let newSlides: Array<Slide> = state.slides;
            newSlides.splice(indexToInsert, 0, newSlide);

            return {
                ...state,
                slides: newSlides,
                selectedSlides: {
                    selectedSlideId: newSlide.id,
                    selectedBlocksId: []
                }
            }
        default:
            return state;
    }
}

export const addSlide = () => ({type: SlideActionTypes.ADD_SLIDE});

export {
    presentationReducer
}