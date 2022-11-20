import styles from '../../common/barIcon/BarIcon.module.css';
import bold from '../../../assets/images/barIcons/bold.svg';

const Bold = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={bold} alt='Bold' />
    </div>

  );
}

export default Bold;