import styles from './Filmstrip.module.css';
import { FilmstripSlide } from './components/filmstripSlide/FilmstripSlide';
import { Slide } from '../../../../data/types';

type FilmstripProps = {
    slides: Array<Slide>
}

function Filmstrip(props: FilmstripProps) {
    return (
        <div className={styles.slide}>
            {props.slides.map(slide => (
                <FilmstripSlide
                    key={slide.id}
                    slide={slide}
                />
            ))}
        </div>
    );
}

export default Filmstrip;
