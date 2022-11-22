import { Presentation } from '../../data/types';
import { Workspace } from './components/workspace/Workspace';
import Filmstrip from './components/filmstrip/Filmstrip';
import styles from './PresentationEditorArea.module.css';

type PresentationEditorAreaProps = {
    presentation: Presentation
}

export function PresentationEditorArea(props: PresentationEditorAreaProps) {
    return (
        <div className={styles.editorArea}>
            <Filmstrip slides={props.presentation.slides} />
            <Workspace slide={props.presentation.slides[0]} />
        </div>
    )
}
