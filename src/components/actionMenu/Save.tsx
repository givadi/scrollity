import styles from './../Button.module.css';
import save_as from '../../img/save_as.svg';

const Save = () => {
  return (
    <div>
<img className={styles.button} src={save_as} alt='Save'/>
    </div>
  );
}

export default Save;
