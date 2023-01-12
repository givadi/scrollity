import {getEmptySlide} from '../store/actions/slides';
import {Slide} from './slides';
import {Selection} from './selectedSlides';

type CanvasSize = {
    width: string,
    height: string
}

type Presentation = {
    name: string,
    slides: Array<Slide>,
    selectedSlides: Array<string> | Selection
}

export const DEFAULT_PRESENTATION_NAME: string = 'Untitled';

export const initialState: Presentation = {
    name: DEFAULT_PRESENTATION_NAME,
    slides: [getEmptySlide()],
    selectedSlides: []
}

export type {
    Presentation,
    CanvasSize
}