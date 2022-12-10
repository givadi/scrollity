import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import { PresentationEditorArea } from './components/workPanel/PresentationEditorArea';
import { Presentation } from './data/types';
import store from "./store/store";

type appProps = {
    presentation: Presentation
}

function App(props: appProps) {
    let presa = store.getState();
    store.subscribe(() => {
        console.log('sdasdasd')
        presa = store.getState()
    })
    return (
        <div className={styles.app}>
            <Menubar />
            <Toolbar />
            <PresentationEditorArea presentation={presa} />
        </div>
    );
}

export default App;
