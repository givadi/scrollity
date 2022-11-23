import {Slide} from '../../../../data/types';
import styles from './Canvas.module.css';
import {CanvasBlock} from './components/canvasBlock/CanvasBlock';

type CanvasProps = {
    slide: Slide
}

const CanvasStyles = {

}

function getBackground(slide: Slide) {
    if (slide.background.type === 'image') {

    }
    else if (slide.background.type === 'color') {

    }
}

function Canvas(props: CanvasProps) {
    return (
        <svg className={styles.canvas} width={960} height={540}>
            {props.slide.data.map(block => (
                <CanvasBlock
                    key={block.id}
                    block={block}
                />
            ))}
        </svg>
    );
}

export {
    Canvas
}