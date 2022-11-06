import styles from './../Button.module.css';
import undo from '../../img/undo.svg';

const Undo = () => {
  return (
    <div>
<img className={styles.button} src={undo} alt='Undo'/>
    </div>
  );
}

export default Undo;
