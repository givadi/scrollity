import styles from '../../common/menuIcon/MenuIcon.module.css';
import rectangle from '../../../assets/images/barIcons/rectangle.svg';

const Rectangle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={rectangle} alt='Rectangle' />
    </div>
  );
}

export default Rectangle;
