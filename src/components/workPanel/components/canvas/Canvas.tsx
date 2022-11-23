import {Slide} from '../../../../data/types';
import styles from './Canvas.module.css';
import {CanvasBlock} from './components/canvasBlock/CanvasBlock';

type CanvasProps = {
    slide: Slide
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
        <svg className={styles.canvas} style={{background: canvasBackground}} width={960} height={540}>
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