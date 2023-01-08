import styles from './Canvas.module.css';
import {CanvasBlock} from './components/canvasBlock/CanvasBlock';
import {Slide} from '../../../../types/slides';

type CanvasProps = {
    slide: Slide,
    isFilmstrip: boolean,
    size?: {
        width: number,
        height: number
    },
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
             width={props.size ? props.size.width : CANVAS_SIZE.width}
             height={props.size ? props.size.height : CANVAS_SIZE.height}
             viewBox={`0 0 ${CANVAS_SIZE.width} ${CANVAS_SIZE.height}`}
        >
            {props.slide.data.map(block => (
                <CanvasBlock
                    key={block.id}
                    block={block}
                    isFilmstrip={props.isFilmstrip}
                />
            ))}
        </svg>
    );
}

export {
    Canvas
}