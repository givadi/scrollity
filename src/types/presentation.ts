import {Presentation} from '../data/types';
import {getEmptySlide} from '../store/actions/slides';

export const initialState: Presentation = {
    name: 'Untitled',
    slides: [getEmptySlide()],
    selectedSlides: []
}