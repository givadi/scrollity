import { Presentation } from '../../data/types';
import { SlideLayout } from './components/slideLayout/SlideLayout';
import Slideview from './components/slideView/Slideview';
import styles from './WorkPanel.module.css';

type workPanelProps = {
    presentation: Presentation
}

export function WorkPanel(props: workPanelProps) {
    return (
        <div className={styles.workPanel}>
            <Slideview slides={props.presentation.slides} />
            <SlideLayout />
        </div>
    )
}
