import {Slide} from '../../../../data/types';
import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';

type WorkspaceProps = {
    slide: Slide
}

export function Workspace(props: WorkspaceProps) {

    return (
        <div className={styles.wrapper}>
            <Canvas slide={props.slide} />
        </div>
    );
}