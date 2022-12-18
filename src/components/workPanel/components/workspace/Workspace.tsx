import {Presentation, Selection, Slide} from '../../../../data/types';
import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';
import {connect} from 'react-redux';

type WorkspaceProps = {
    slides: Array<Slide>,
    selectedSlides: Array<string> | Selection
}

const SLIDE_SIZE_COEFFICIENT = 1;

function Workspace(props: WorkspaceProps) {
    const presentationSelection: string = Array.isArray(props.selectedSlides)
        ? props.selectedSlides[0]
        : props.selectedSlides.selectedSlideId;

    const currentSlide: Slide = props.slides.find((slide: Slide) => {
        return slide.id === presentationSelection;
    }) ?? props.slides[0];

    return (
        <div className={styles.wrapper}>
            <Canvas slide={currentSlide} sizeCoefficient={SLIDE_SIZE_COEFFICIENT} />
        </div>
    );
}

function mapStateToProps(state: Presentation) {
    return {
        slides: state.slides,
        selectedSlides: state.selectedSlides,
    }
}

export default connect(mapStateToProps)(Workspace);