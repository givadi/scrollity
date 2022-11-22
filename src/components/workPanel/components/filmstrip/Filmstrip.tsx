import styles from './Filmstrip.module.css';
import { Thumbnail } from './components/thumbnail/Thumbnail';
import { Slide } from '../../../../data/types';

type FilmstripProps = {
    slides: Array<Slide>
}

function Filmstrip(props: FilmstripProps) {
    return (
        <div className={styles.slide}>
            {props.slides.map(slide => (
                <Thumbnail
                    key={slide.id}
                    slide={slide}
                />
            ))}
        </div>
    );
}

export default Filmstrip;
