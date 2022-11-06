import styles from './../Button.module.css';
import redo from '../../img/redo.svg';

const Redo = () => {
  return (
    <div>
<img className={styles.button} src={redo} alt='Redo'/>
    </div>
  );
}

export default Redo;
