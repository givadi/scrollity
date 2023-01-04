import {Presentation, Slide} from '../../../../data/types';
import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';
import {useSelector} from 'react-redux';
import store from '../../../../store/store';
import {getSelectedSlidesById} from '../../../../common/slides';

const SLIDE_SIZE_COEFFICIENT = 1;

function Workspace() {
    useSelector((state: Presentation) => state.selectedSlides)

    const currentSlide: Slide = getSelectedSlidesById(store.getState().slides, store.getState().selectedSlides)[0];

    return (
        <div className={styles.wrapper}>
            <Canvas slide={currentSlide} sizeCoefficient={SLIDE_SIZE_COEFFICIENT} />
        </div>
    );
}

export default Workspace;