import styles from './../Button.module.css';
import insert_picture from '../../img/insert_picture.svg';

const InsertPicture = () => {
  return (
    <div>
<img className={styles.button} src={insert_picture} alt='Insert_picture'/>
    </div>
  );
}

export default InsertPicture;
