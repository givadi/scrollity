import {Slide} from '../../../../data/types';
import styles from './Canvas.module.css';
import {CanvasBlock} from './components/canvasBlock/CanvasBlock';

type CanvasProps = {
    slide: Slide,
    sizeCoefficient: number
}

const CANVAS_SIZE = {
    width: 960,
    height: 540
}

function getBackground(slide: Slide): string {
    if (slide.background.type === 'image') {
        return 'url(' + slide.background.data + ') no-repeat center/100% 100% #fff';
    }
    else if (slide.background.type === 'color') {
        return slide.background.data;
    }

    return '#fff';
}

function Canvas(props: CanvasProps) {
    const canvasBackground: string = getBackground(props.slide);
    return (
        <svg className={styles.canvas}
             style={{background: canvasBackground}}
             width={CANVAS_SIZE.width / props.sizeCoefficient}
             height={CANVAS_SIZE.height / props.sizeCoefficient}
        >
            {props.slide.data.map(block => (
                <CanvasBlock
                    key={block.id}
                    block={block}
                    sizeCoefficient={props.sizeCoefficient}
                />
            ))}
        </svg>
    );
}

export {
    Canvas
}