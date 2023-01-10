import styles from './Thumbnail.module.css';
import {Canvas} from '../../../canvas/Canvas';
import {useDispatch} from 'react-redux';
import {selectSlide, selectSlides} from '../../../../../../store/actionCreators/selectedSlides';
import store from '../../../../../../store/store';
import {Slide} from '../../../../../../types/slides';
import {Selection} from '../../../../../../types/selectedSlides';

type ThumbnailProps = {
    slide: Slide,
    slideNumber: number,
}

function checkIfActive(selectedSlides: Array<string> | Selection, currentSlideId: string): boolean {
    if (Array.isArray(selectedSlides)) {
        return selectedSlides.indexOf(currentSlideId) > -1;
    }

    return selectedSlides.selectedSlideId === currentSlideId;
}

export function Thumbnail(props: ThumbnailProps) {
    const dispatch = useDispatch();
    const isActive = checkIfActive(store.getState().selectedSlides, props.slide.id) ? styles.wrapperActive : '';
    const thumbnailSize = {
        width: 160,
        height: 90
    }

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ''}`}
            onClick={(event) => {
                event.ctrlKey
                    ? dispatch(selectSlides(props.slide.id))
                    : dispatch(selectSlide(props.slide.id));
            }}
        >
            <span className={styles.number}>{props.slideNumber}</span>
            <div className={`${styles.thumbnail} ${isActive ? styles.thumbnailActive : ''}`}>
                <Canvas slide={props.slide} size={thumbnailSize} isFilmstrip={true}></Canvas>
            </div>
        </div>
    )
}
