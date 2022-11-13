import styles from './../Icon.module.css';
import rectangle from '../../img/rectangle.svg';

const Rectangle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={rectangle} alt='Rectangle' />
    </div>
  );
}

export default Rectangle;
