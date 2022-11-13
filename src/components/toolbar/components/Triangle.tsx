import styles from '../../common/menuIcon/MenuIcon.module.css';
import triangle from '../../../img/triangle.svg';

const Triangle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={triangle} alt='Triangle' />
    </div>
  );
}

export default Triangle;
