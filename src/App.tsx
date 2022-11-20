import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import { PresentationEditorArea } from './components/workPanel/PresentationEditorArea';
import { Presentation } from './data/types';

type appProps = {
    presentation: Presentation
}

function App(props: appProps) {
    return (
        <div className={styles.app}>
            <Menubar />
            <Toolbar />
            <PresentationEditorArea presentation={props.presentation} />
        </div>
    );
}

export default App;
