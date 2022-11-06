import styles from './../Button.module.css';
import font_family from '../../img/font_family.svg';

const FontFamily = () => {
  return (
    <div>
<img className={styles.button} src={font_family} alt='FontFamily'/>
    </div>
  );
}

export default FontFamily;
