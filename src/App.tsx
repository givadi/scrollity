import styles from './App.module.css';
import ActionMenu from './ActionMenu';
import Toolbar from './Toolbar';
import Slideview from './components/slideView/Slideview';
import Slide from './Slide';

function App() {
    return (
        <div className={styles.app}>
            <ActionMenu />
            <Toolbar />
            <Slideview />
            <Slide />
        </div>
    );
}

export default App;
