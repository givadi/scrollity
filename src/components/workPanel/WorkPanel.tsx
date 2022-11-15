import { Presentation } from '../../data/types';
import { SlideLayout } from './components/slideLayout/SlideLayout';
import SlideView from './components/slideView/SlideView';
import styles from './WorkPanel.module.css';

type workPanelProps = {
    presentation: Presentation
}

export function WorkPanel(props: workPanelProps) {
    return (
        <div className={styles.workPanel}>
            <SlideView slides={props.presentation.slides} />
            <SlideLayout slide={props.presentation.slides[0]} />
        </div>
    )
}
