import styles from '../../common/menuIcon/MenuIcon.module.css';
import font_family from '../../../assets/images/barIcons/font_family.svg';

const FontFamily = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={font_family} alt='FontFamily' />
    </div>
  );
}

export default FontFamily;
