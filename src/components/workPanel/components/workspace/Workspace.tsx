import {Slide} from '../../../../data/types';
import styles from './Workspace.module.css';

type WorkspaceProps = {
    slide: Slide
}

export function Workspace(props: WorkspaceProps) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.canvas}>
                Slide
            </div>
        </div>
    );
}