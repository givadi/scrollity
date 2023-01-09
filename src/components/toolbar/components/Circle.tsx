import styles from '../../common/barIcon/BarIcon.module.css';
import circle from '../../../assets/images/barIcons/circle.svg';

const Circle = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={circle} alt='Circle' />
    </div>
  );
}

export default Circle;
