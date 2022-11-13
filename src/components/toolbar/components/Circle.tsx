import styles from '../../common/menuIcon/MenuIcon.module.css';
import circle from '../../../img/circle.svg';

const Circle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={circle} alt='Circle' />
    </div>
  );
}

export default Circle;
