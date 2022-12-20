import Workspace from './components/workspace/Workspace';
import Filmstrip from './components/filmstrip/Filmstrip';
import styles from './PresentationEditorArea.module.css';

function PresentationEditorArea() {
    return (
        <div className={styles.editorArea}>
            <Filmstrip />
            <Workspace />
        </div>
    )
}

export default PresentationEditorArea;