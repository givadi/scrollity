import styles from './App.module.css';
import ActionMenu from './components/actionMenu/ActionMenu';
import Toolbar from './components/toolbar/Toolbar';
import { WorkPanel } from './components/workPanel/WorkPanel';

function App() {
    return (
        <div className={styles.app}>
            <ActionMenu />
            <Toolbar />
            <WorkPanel />
        </div>
    );
}

export default App;
