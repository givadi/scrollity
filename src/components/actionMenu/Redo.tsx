import styles from './../Icon.module.css';
import redo from '../../img/redo.svg';

const Redo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={redo} alt='Redo' />
    </div>
  );
}

export default Redo;
