import styles from './Menubar.module.css';
import Open from './components/Open';
import Save from './components/Save';
import View from './components/View';
import Template from './components/Template';

const Menubar = () => {
  return (
    <div className={styles.actionMenu}>
        <div className={styles.section}>
            <Open />
            <Save />
            <View />
            <Template />
        </div>
    </div>
  );
}

export default Menubar;
