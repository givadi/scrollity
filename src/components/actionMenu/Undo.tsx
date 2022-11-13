import styles from './../Icon.module.css';
import undo from '../../img/undo.svg';

const Undo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={undo} alt='Undo' />
    </div>
  );
}

export default Undo;
