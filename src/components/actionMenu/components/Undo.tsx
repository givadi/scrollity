import styles from '../../common/menuIcon/MenuIcon.module.css';
import undo from '../../../assets/images/barIcons/undo.svg';

const Undo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={undo} alt='Undo' />
    </div>
  );
}

export default Undo;
