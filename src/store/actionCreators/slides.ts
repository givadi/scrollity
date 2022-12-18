import {SlideActionTypes} from '../../types/slides';

export const addSlide = () => ({type: SlideActionTypes.ADD_SLIDE});
export const deleteSlides = () => ({type: SlideActionTypes.DELETE_SLIDES});
export const selectSlide = (slideId: string) => (
    {
        type: SlideActionTypes.SELECT_SLIDE,
        payload: slideId
    }
);
