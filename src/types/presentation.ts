import {Presentation} from '../data/types';
import {getEmptySlide} from '../store/actions/slides';

export const DEFAULT_PRESENTATION_NAME: string = 'Untitled';

export const initialState: Presentation = {
    name: DEFAULT_PRESENTATION_NAME,
    slides: [getEmptySlide()],
    selectedSlides: []
}