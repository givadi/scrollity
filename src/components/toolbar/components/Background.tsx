import styles from '../../common/barIcon/BarIcon.module.css';
import {useDispatch, useSelector} from 'react-redux';
import store from '../../../store/store';
import {Presentation, Slide} from '../../../data/types';
import {getLastSelectedSlideId} from '../../../common/functions/slides';
import {changeBackground} from '../../../store/actionCreators/slides';
import {DEFAULT_COLOR} from '../../../common/consts/common';

function getCurrentSlideColor(): string {
    const currentSlideId: string = getLastSelectedSlideId(store.getState().selectedSlides);
    const currentSlide: Slide = store.getState().slides.filter((slide: Slide) => {
        return slide.id === currentSlideId;
    })[0];

    return currentSlide
        ? currentSlide.background.type === 'image' ? DEFAULT_COLOR : currentSlide.background.data
        : DEFAULT_COLOR
}

function Background() {
    const dispatch = useDispatch();
    useSelector((state: Presentation) => {
        const colorPickerInput: HTMLInputElement = document.getElementById('slideBackgroundColorPicker') as HTMLInputElement;

        if (colorPickerInput) {
            colorPickerInput.value = getCurrentSlideColor();
        }
        return state.selectedSlides;
    });

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <input className={styles.colorPicker}
                       defaultValue={getCurrentSlideColor()}
                       id={'slideBackgroundColorPicker'}
                       type={'color'}
                       onBlur={(event) =>
                           dispatch(changeBackground(
                               store.getState().selectedSlides,
                               {
                                   type: 'color',
                                   data: event.target.value
                               }
                           ))}
                       onKeyDown={(event) => {
                           if (event.key === 'Enter') {
                               dispatch(changeBackground(
                                   store.getState().selectedSlides,
                                   {
                                       type: 'color',
                                       data: event.currentTarget.value
                                   }
                               ))
                           }
                       }}
                />
            </div>
            <div className={styles.container}>
                <input
                    id={'slideBackgroundImagePicker'}
                    type={'file'}
                    title={''}
                    onChange={(event) => {
                        if (!event.target.files) {
                            return;
                        }

                        const reader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]);
                        reader.onload = function () {
                            dispatch(changeBackground(
                                store.getState().selectedSlides,
                                {
                                    type: 'image',
                                    data: reader.result as string
                                }
                            ))
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Background;