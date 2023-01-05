import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import PresentationEditorArea from './components/workPanel/PresentationEditorArea';
import store from './store/store';
import PresentationName from './components/presentationName/PresentationName';
import {useSelector} from 'react-redux';
import {Presentation} from './types/presentation';

function App() {
    document.title = store.getState().name;
    useSelector((state: Presentation) => state.name);

    return (
        <div className={styles.app}>
            <PresentationName />
            <Menubar />
            <Toolbar />
            <PresentationEditorArea />
        </div>
    );
}

export default App;
