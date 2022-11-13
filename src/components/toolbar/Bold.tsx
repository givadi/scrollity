import styles from './../Icon.module.css';
import bold from '../../img/bold.svg';

const Bold = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={bold} alt='Bold' />
    </div>

  );
}

export default Bold;