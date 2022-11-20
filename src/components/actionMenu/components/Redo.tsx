import styles from '../../common/menuIcon/MenuIcon.module.css';
import redo from '../../../assets/images/barIcons/redo.svg';

const Redo = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={redo} alt='Redo' />
    </div>
  );
}

export default Redo;
