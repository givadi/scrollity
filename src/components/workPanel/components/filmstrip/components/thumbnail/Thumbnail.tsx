import {Selection, Slide} from '../../../../../../data/types';
import styles from './Thumbnail.module.css';
import {Canvas} from '../../../canvas/Canvas';
import {useDispatch} from 'react-redux';
import {selectSlide} from '../../../../../../store/actionCreators/selectedSlides';

type ThumbnailProps = {
    slide: Slide,
    slideNumber: number,
    selectedSlides: Array<string> | Selection
}

const THUMBNAIL_SLIDE_SIZE_COEFFICIENT = 6;

function checkIfActive(selectedSlides: Array<string> | Selection, currentSlideId: string): boolean {
    if (Array.isArray(selectedSlides))
    {
        return selectedSlides.indexOf(currentSlideId) > 0;
    }

    return selectedSlides.selectedSlideId === currentSlideId;
}

export function Thumbnail(props: ThumbnailProps) {
    const dispatch = useDispatch();
    const isActive = checkIfActive(props.selectedSlides, props.slide.id) ? styles.wrapperActive : '';

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.wrapperActive : ''}`}
            onClick={() => dispatch(selectSlide(props.slide.id))}
        >
            <span className={styles.number}>{props.slideNumber}</span>
            <div className={`${styles.thumbnail} ${isActive ? styles.thumbnailActive : ''}`}>
                <Canvas slide={props.slide} sizeCoefficient={THUMBNAIL_SLIDE_SIZE_COEFFICIENT}></Canvas>
            </div>
        </div>
    )
}
