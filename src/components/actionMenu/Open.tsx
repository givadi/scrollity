import styles from './../Button.module.css';
import open_file from '../../img/open_file.svg';

const Open = () => {
  return (
    <div>
<img className={styles.button} src={open_file} alt='Open file'/>
    </div>
  );
}

export default Open;
