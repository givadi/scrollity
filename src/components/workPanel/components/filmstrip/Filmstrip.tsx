import styles from './Filmstrip.module.css';
import { Thumbnail } from './components/thumbnail/Thumbnail';
import { Slide } from '../../../../data/types';

type FilmstripProps = {
    slides: Array<Slide>
}

function Filmstrip(props: FilmstripProps) {
    return (
        <div className={styles.filmstrip}>
            {props.slides.map((slide, index) => (
                <Thumbnail
                    key={slide.id}
                    slide={slide}
                    slideNumber = {index + 1}
                />
            ))}
        </div>
    );
}

export default Filmstrip;
