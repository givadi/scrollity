import { Slide } from '../../../../../../data/types';
import styles from './Thumbnail.module.css';
import {Canvas} from '../../../canvas/Canvas';
import {useDispatch} from 'react-redux';
import {selectSlide} from '../../../../../../store/actionCreators/slides';

type ThumbnailProps = {
    slide: Slide,
    slideNumber: number
}

const THUMBNAIL_SLIDE_SIZE_COEFFICIENT = 6;

export function Thumbnail(props: ThumbnailProps) {
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper} 
            onClick={() => {
                dispatch(selectSlide(props.slide.id))
            }}
        >
            <span className={styles.number}>{props.slideNumber}</span>
            <div className={styles.thumbnail}>
                <Canvas slide={props.slide} sizeCoefficient={THUMBNAIL_SLIDE_SIZE_COEFFICIENT}></Canvas>
            </div>
        </div>
    )
}