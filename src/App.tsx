import styles from './App.module.css';
import Menubar from './components/menubar/Menubar';
import Toolbar from './components/toolbar/Toolbar';
import PresentationEditorArea from './components/workPanel/PresentationEditorArea';
import PresentationName from './components/presentationName/PresentationName';

function App() {

    return (
        <div className={styles.app}>
            <PresentationName />
            <div>
                <Menubar />
                <Toolbar />
            </div>
            <PresentationEditorArea />
        </div>
    );
}

export default App;
