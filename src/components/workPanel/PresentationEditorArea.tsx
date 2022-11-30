import {Presentation, Slide} from '../../data/types';
import { Workspace } from './components/workspace/Workspace';
import Filmstrip from './components/filmstrip/Filmstrip';
import styles from './PresentationEditorArea.module.css';

type PresentationEditorAreaProps = {
    presentation: Presentation
}

export function PresentationEditorArea(props: PresentationEditorAreaProps) {

    const presentationSelection: string = Array.isArray(props.presentation.selectedSlides)
        ? props.presentation.selectedSlides[0]
        : props.presentation.selectedSlides.selectedSlideId;

    const workspaceData: Slide = props.presentation.slides.find((slide: Slide) => {
        return slide.id === presentationSelection;
    }) ?? props.presentation.slides[0];

    return (
        <div className={styles.editorArea}>
            <Filmstrip slides={props.presentation.slides} />
            <Workspace slide={workspaceData} />
        </div>
    )
}
