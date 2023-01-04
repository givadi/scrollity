import styles from './Filmstrip.module.css';
import {Thumbnail} from './components/thumbnail/Thumbnail';
import {Presentation} from '../../../../data/types';
import {useSelector} from 'react-redux';
import store from '../../../../store/store';

function Filmstrip() {
    useSelector((state: Presentation) => state.selectedSlides);

    return (
        <div className={styles.filmstrip}>
            {store.getState().slides.map((slide, index) => (
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
