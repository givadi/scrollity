import styles from './Filmstrip.module.css';
import {Thumbnail} from './components/thumbnail/Thumbnail';
import {useSelector} from 'react-redux';
import {Presentation} from '../../../../data/types';

function Filmstrip() {
    const slides = useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);

    return (
        <div className={styles.filmstrip}>
            {slides.map((slide, index) => (
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
