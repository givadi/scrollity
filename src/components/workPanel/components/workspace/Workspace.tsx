import {Slide} from '../../../../data/types';
import styles from './Workspace.module.css';
import {Canvas} from '../canvas/Canvas';

type WorkspaceProps = {
    slide: Slide
}

const SLIDE_SIZE_COEFFICIENT = 1;

export function Workspace(props: WorkspaceProps) {

    return (
        <div className={styles.wrapper}>
            <Canvas slide={props.slide} sizeCoefficient={SLIDE_SIZE_COEFFICIENT} />
        </div>
    );
}