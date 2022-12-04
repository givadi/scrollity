import { Slide } from '../../../../../../data/types';
import styles from './Thumbnail.module.css';
import {Canvas} from "../../../canvas/Canvas";
import { dispatch } from '../../../../../../data/testData_v2';
import { selectSlide } from '../../../../../../actions/slides';

type ThumbnailProps = {
    slide: Slide,
    slideNumber: number
}

const THUMBNAIL_SLIDE_SIZE_COEFFICIENT = 6;

export function Thumbnail(props: ThumbnailProps) {
    return (
        <div className={styles.wrapper} 
            onClick={() => {
                dispatch(selectSlide, props.slide.id)
            }}
        >
            <span className={styles.number}>{props.slideNumber}</span>
            <div className={styles.thumbnail}>
                <Canvas slide={props.slide} sizeCoefficient={THUMBNAIL_SLIDE_SIZE_COEFFICIENT}></Canvas>
            </div>
        </div>
    )
}