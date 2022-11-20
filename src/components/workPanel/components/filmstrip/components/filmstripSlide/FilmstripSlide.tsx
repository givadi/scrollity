import { Slide } from '../../../../../../data/types';
import styles from './FilmstripSlide.module.css';

type FilmstripSlideProps = {
    slide: Slide
}

export function FilmstripSlide(props: FilmstripSlideProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.slide}>Slide</div>
        </div>
    )
}