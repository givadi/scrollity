import styles from '../../common/barIcon/BarIcon.module.css';
import rectangle from '../../../assets/images/barIcons/rectangle.svg';

const Rectangle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={rectangle} alt='Rectangle' />
    </div>
  );
}

export default Rectangle;
