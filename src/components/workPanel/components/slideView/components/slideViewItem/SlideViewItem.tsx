import { Slide } from '../../../../../../data/types';
import styles from './SlideViewItem.module.css';

type SlideViewItemProps = {
    slide: Slide
}

export function SlideViewItem(props: SlideViewItemProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slide}>Slide</div>
        </div>
    )
}