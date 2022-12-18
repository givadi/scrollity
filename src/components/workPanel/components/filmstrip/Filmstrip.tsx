import styles from './Filmstrip.module.css';
import { Thumbnail } from './components/thumbnail/Thumbnail';
import {Presentation, Slide} from '../../../../data/types';
import {connect} from 'react-redux';

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

function mapStateToProps(state: Presentation) {
    return {
        slides: state.slides,
    }
}

export default connect(mapStateToProps)(Filmstrip);
