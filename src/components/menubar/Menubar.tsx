import styles from './Menubar.module.css';
import Open from './components/Open';
import Save from './components/Save';
import View from './components/View';

const Menubar = () => {
  return (
    <div className={styles.actionMenu}>
        <div className={styles.section}>
            <Open />
            <Save />
            <View />
        </div>
    </div>
  );
}

export default Menubar;
