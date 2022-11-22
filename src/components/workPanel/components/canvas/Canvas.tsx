import {Slide} from '../../../../data/types';
import styles from './Canvas.module.css';

type CanvasProps = {
    slide: Slide
}

function Canvas(props: CanvasProps) {
    return (
        <svg className={styles.canvas}>
            Slide
        </svg>
    );
}

export {
    Canvas
}