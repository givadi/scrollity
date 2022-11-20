import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import { WorkPanel } from './components/workPanel/WorkPanel';
import { Presentation } from './data/types';

type appProps = {
    presentation: Presentation
}

function App(props: appProps) {
    return (
        <div className={styles.app}>
            <Menubar />
            <Toolbar />
            <WorkPanel presentation={props.presentation} />
        </div>
    );
}

export default App;
