import styles from './SlideView.module.css';
import { SlideViewItem } from './components/slideViewItem/SlideViewItem';
import { Slide } from '../../../../data/types';

type SlideViewProps = {
    slides: Array<Slide>
}

function SlideView(props: SlideViewProps) {
    return (
        <div className={styles.slideView}>
            {props.slides.map(slide => (
                <SlideViewItem
                    key={slide.id}
                    slide={slide}
                />
            ))}
        </div>
    );
}

export default SlideView;
