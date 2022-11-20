import styles from '../../common/barIcon/BarIcon.module.css';
import font_size from '../../../assets/images/barIcons/font_size.svg';

const FontSize = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={font_size} alt='Font Size' />
    </div>
  );
}

export default FontSize;
