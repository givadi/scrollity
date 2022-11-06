import styles from './../Button.module.css';
import font_size from '../../img/font_size.svg';

const FontSize = () => {
  return (
    <div>
<img className={styles.button} src={font_size} alt='Font Size'/>
    </div>
  );
}

export default FontSize;
