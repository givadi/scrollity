import styles from '../../common/barIcon/BarIcon.module.css';
import font_family from '../../../assets/images/barIcons/font_family.svg';

const FontFamily = () => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={font_family} alt='FontFamily' />
    </div>
  );
}

export default FontFamily;
