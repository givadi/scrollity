import styles from '../../common/barIcon/BarIcon.module.css';
import undo from '../../../assets/images/barIcons/undo.svg';

const Undo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={undo} alt='Undo' />
    </div>
  );
}

export default Undo;
