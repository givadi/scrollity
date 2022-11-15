import { type } from '@testing-library/user-event/dist/type';
import styles from './App.module.css';
import ActionMenu from './components/actionMenu/ActionMenu';
import Toolbar from './components/toolbar/Toolbar';
import { WorkPanel } from './components/workPanel/WorkPanel';
import { Slide } from './data/types';
import { Presentation } from './data/types';

type appProps = {
    presentation: Presentation
}

function App(props: appProps) {
    console.log(props);
    return (
        <div className={styles.app}>
            <ActionMenu />
            <Toolbar />
            <WorkPanel presentation={props.presentation} />
        </div>
    );
}

export default App;
