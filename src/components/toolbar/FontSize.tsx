import styles from './../Icon.module.css';
import font_size from '../../img/font_size.svg';

const FontSize = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={font_size} alt='Font Size' />
    </div>
  );
}

export default FontSize;
