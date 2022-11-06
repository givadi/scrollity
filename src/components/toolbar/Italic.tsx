import styles from './../Button.module.css';
import italic from '../../img/italic.svg';

const Italic = () => {
  return (
    <div>
<img className={styles.button} src={italic} alt='Italic'/>
    </div>
  );
}

export default Italic;
