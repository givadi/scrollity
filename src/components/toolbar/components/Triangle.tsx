import styles from '../../common/barIcon/BarIcon.module.css';
import triangle from '../../../assets/images/barIcons/triangle.svg';

const Triangle = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={triangle} alt='Triangle' />
    </div>
  );
}

export default Triangle;
