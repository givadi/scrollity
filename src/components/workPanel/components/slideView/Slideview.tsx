import { Slide } from '../../../../data/types';
import styles from './SlideView.module.css';

type SlideViewProps = {
    slide: Slide
}

export function SlideView(props: SlideViewProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                Slide
            </div>
        </div>
    );
}