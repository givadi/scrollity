import { Slide } from '../../../../data/types';
import styles from './SlideLayout.module.css';

type SlideLayoutProps = {
    slide: Slide
}

export function SlideLayout(props: SlideLayoutProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layout}>
                Slide
            </div>
        </div>
    );
}