import styles from '../../common/barIcon/BarIcon.module.css';
import italic from '../../../assets/images/barIcons/italic.svg';

const Italic = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={italic} alt='Italic' />
    </div>
  );
}

export default Italic;
