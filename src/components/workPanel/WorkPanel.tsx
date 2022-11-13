import Slide from './components/slide/Slide';
import Slideview from './components/slideView/Slideview';
import styles from './WorkPanel.module.css';

export function WorkPanel() {
    return (
        <div className={styles.workPanel}>
            <Slideview />
            <Slide />
        </div>
    )
}
