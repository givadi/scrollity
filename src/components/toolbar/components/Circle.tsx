import styles from '../../common/menuIcon/MenuIcon.module.css';
import circle from '../../../assets/images/barIcons/circle.svg';

const Circle = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={circle} alt='Circle' />
    </div>
  );
}

export default Circle;
