import styles from './../Icon.module.css';
import italic from '../../img/italic.svg';

const Italic = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={italic} alt='Italic' />
    </div>
  );
}

export default Italic;
