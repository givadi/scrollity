import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import PresentationEditorArea from './components/workPanel/PresentationEditorArea';

function App() {
    return (
        <div className={styles.app}>
            <Menubar />
            <Toolbar />
            <PresentationEditorArea />
        </div>
    );
}

export default App;
