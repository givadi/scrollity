import styles from '../../common/barIcon/BarIcon.module.css';
import redo from '../../../assets/images/barIcons/redo.svg';

const Redo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={redo} alt='Redo' />
    </div>
  );
}

export default Redo;
