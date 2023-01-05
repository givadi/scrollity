import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';
import {useSelector} from 'react-redux';
import store from '../../../../store/store';
import {getSlidesBySelection} from '../../../../common/functions/slides';
import {Presentation} from '../../../../types/presentation';
import {Slide} from '../../../../types/slides';

const SLIDE_SIZE_COEFFICIENT = 1;

function Workspace() {
    useSelector((state: Presentation) => state.slides);
    useSelector((state: Presentation) => state.selectedSlides);

    const currentSlide: Slide = getSlidesBySelection(store.getState().slides, store.getState().selectedSlides)[0];

    return (
        <div className={styles.wrapper}>
            <Canvas slide={currentSlide} sizeCoefficient={SLIDE_SIZE_COEFFICIENT} />
        </div>
    );
}

export default Workspace;