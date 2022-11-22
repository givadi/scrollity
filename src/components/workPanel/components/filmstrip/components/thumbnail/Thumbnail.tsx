import { Slide } from '../../../../../../data/types';
import styles from './Thumbnail.module.css';

type ThumbnailProps = {
    slide: Slide
}

export function Thumbnail(props: ThumbnailProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.thumbnail}>Slide</div>
        </div>
    )
}