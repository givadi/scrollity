import styles from './../Button.module.css';
import bold from '../../img/bold.svg';

const Bold = () => {
  return (
    <div>
<img className={styles.button} src={bold} alt='Bold'/>
    </div>
  );
}

export default Bold;
